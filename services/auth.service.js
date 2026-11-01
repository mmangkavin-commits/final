const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../models/user.model');
const { sendOtpEmail } = require('./mail.service');
const jwtConfig = require('../config/jwt.config');
const jwt = require('jsonwebtoken');
const { email } = require('zod');

const generateOTP = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++)
        otp += characters.charAt(crypto.randomInt(characters.length));
    return otp;
};

const register = async (body) => {
    // check email exist 
    const checkEmail = await userModel.checkEmailExists(body.email);
    if (checkEmail) {
        throw new Error('User with this email already exists');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const otpCode = generateOTP();
    const hashedOtpCode = await bcrypt.hash(otpCode, 10);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    // create user
    const user = await userModel.createUser({
        username: body.username,
        email: body.email,
        password: hashedPassword,
        otp_code: hashedOtpCode,
        otp_expires_at: otpExpiresAt
    });

    await sendOtpEmail(body.email, body.username, otpCode);
    return user;
}

const verifyOtp = async (email,otpCode)=>{
    const user = await userModel.getUserByEmail(email);
    if(!user){
        throw new Error(`User with this email does not exists`
        );

    }
if(user.is_active){
    throw new Error (`User is already activated`);

}
const isOtpMatch = await bcrypt.compare(otpCode,user.otp_code);
if(!isOtpMatch){
    throw new Error(`Invalid OTP code`);

}
if(new Date()> user.otp_expires_at){
    throw new Error(`OTP code has expired . please requrst a new one`);

}
return await userModel.activateUser(email);
}

const resendOtp = async (email) => {
  const user = await userModel.getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }
  if (user.is_active) {
    throw new Error("Account is already verified");
  }


  if (user.otp_expires_at) {
    const createdAt = new Date(user.otp_expires_at).getTime() - 10 * 60 * 1000;
    if (Date.now() - createdAt < 60 * 1000) {
      throw new Error("Please wait 60 seconds before requesting a new OTP");
    }
  }

  const otp = generateOTP();
  const hashedOtpCode = await bcrypt.hash(otp,10)
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await userModel.updateOtp(email,hashedOtpCode, expiresAt);
  await sendOtpEmail(email,user.username, otp);
}
const login = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
        throw new Error('User with this email does not exists');
    }
    if (!user.is_active) {
        const otpCode = generateOTP();
        const hashedOtpCode = await bcrypt.hash(otpCode, 10);
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await userModel.updateOtp(email, hashedOtpCode, otpExpiresAt);
        await sendOtpEmail(email, user.username, otpCode);
        throw new Error('Account is not activated, please check your mailbox or spam folder for the OTP to activate your account.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        jwtConfig.secret,
        {
            expiresIn: jwtConfig.expiresIn
        }
    );

    delete user.password,
    delete user.otp_code,
    delete user.otp_expires_at;
    
    return {user, token };
};
const getProfile = async (userId) => {
    const user = await userModel.GetUserBuyId(userId);
    if (!user) {
        throw new Error('Unauthorized');
    }

    delete user.password;
    delete user.otp_code;
    delete user.otp_expires_at;

    return user;
}

const forgotPassword = async (email) => {
    const user = await userModel.getUserByEmail(email);

    if (!user) {
        throw new Error('User with this email does not exists');
    }

    const otpCode = generateOTP();
    const hashedOtpCode = await bcrypt.hash(otpCode, 10);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await userModel.updateOtp(email, hashedOtpCode, otpExpiresAt);
    await sendOtpEmail(email, user.username, otpCode);
}
const verifyResetOtp = async (email, otpCode)=>{
    const user = await userModel.getUserByEmail(email);
    const isMatch = await bcrypt.compare(otpCode, user.otp_code);
    if(!isMatch){
        throw new Error('Invalid OTP code');

    }
    if(new Date()> user.otp_expires_at){
        throw new Error('OTP code has expired. please request a new one');
    }
    return true;
}
// const changePassword = async (userId, currentPassword, newPassword) => {
//     const user = await userModel.getUserById(userId);

//     if (!user) {
//         throw new Error('User not found');
//     }

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//         throw new Error('Current password is incorrect');
//     }

//     const isSame = await bcrypt.compare(newPassword, user.password);
//     if (isSame) {
//         throw new Error('New password must be different from the current password');
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     await userModel.updatePasswordById(userId, hashedPassword);
// };
module.exports = {
    register,
    verifyOtp,
    resendOtp,
    login,
    getProfile,
    forgotPassword,
    verifyResetOtp
}