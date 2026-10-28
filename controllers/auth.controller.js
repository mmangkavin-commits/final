const authService = require('../services/auth.service');

const register = async (req, res) => {
    try {
        const response = await authService.register(req.validate);
        return res.status(201).json({
            status: 'success',
            message: 'Registered successfully. Please check your email for the OTP.',
            data: response
        });
    } catch (error) {
        const statusCode = error.message.includes('already') ? 422 : 500;
        return res.status(statusCode).json({
            status: 'error',
            message: 'Register failed',
            error: error.message
        });
    }
}
const verifyOtp = async (req,res) =>{
    try{
        const {email,otp_code} = req.validate;
        const response = await authService.verifyOtp(email,otp_code);
        return res.json({
            status:'success',
            messahe:'Account activated successfully',
            data: response
        });
    }catch (error){
    return res.status(400).json({
        status:'error',
        message:'OTP verification failed ',
        error:error.message
    })
}
}
const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.resendOtp(email);
    return res.json({
        status:'success',
        message:'OTP resent successfully. Please check your mailbox'
    });
  }catch (error){
    const statusCode = error.message.includes('User') ? 400 : 500;
    return res.status(statusCode).json({
        status:'error',
        message:"Resend OTp failed",
        error: error.message
    });
  }
}

const login = async (req, res) => {
    try {
        const { email, password} = req.validate;
        const response = await authService.login(email, password);
        return res.json({
            status: 'success',
            message: 'Login successful',
            data: response
        });
    } catch (error) {
        return res.status(401).json({
            status: 'error',
            message: 'Login failed',
            error: error.message
        });
    }
}
const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const response = await authService.getProfile(userId);
        return res.json({
            status: 'success',
            message: 'Profile retrieved successfully',
            data: response
        });
    } catch (error) {
        const statusCode = error.message.includes('Unauthorized') ? 401 : 500;
        return res.status(statusCode).json({
            status: 'error',
            message: 'Failed to retrieve profile',
            error: error.message
        });
    }
}
const logout = async (req,res)=>{
    try{
        return res.json({
            status:'success',
            message:'successfully'
        })
    }catch (error){
        return res.status(401).json({
            status:'error',
            message:'Logout failed',
            error:error.message
            
        });
    }
}
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.validate;
        await authService.forgotPassword(email);
        return res.json({
            status: 'success',
            message: 'OTP sent successfully. Please check your mailbox or spam folder for the OTP'
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            status: 'error',
            message:'Failed to send OTP',
            error: error.message
        });
    }
}
const verifyResetOtp = async (req, res) => {
    try {
        const { email, otp_code } = req.validate;
        await authService.verifyResetOtp(email, otp_code);
        return res.json({
            status: 'success',
            message: 'OTP verified successfully. You can now reset your password.',
        });
    } catch (error) {
        const statusCode = error.message.includes('OTP') ? 400 : 500;
        return res.status(statusCode).json({
            status: 'error',
            message:'Failed to send verify OTP ',
            error: error.message
        });
    }
}
const resetPassword = async (req, res) => {
    try {
        const { email, new_password } = req.validate;
        await authService.resetPassword(email, new_password);
        return res.json({
            status: 'success',
            message: 'Password reset successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to reset password',
            error: error.message
        });
    }
};
// const changePassword = async (req, res) => {
//     try {
//         const { current_password, new_password } = req.validate;
//         await authService.changePassword(req.user.id, current_password, new_password);
//         return res.json({
//             status: 'success',
//             message: 'Password changed successfully'
//         });
//     } catch (error) {
//         const statusCode = error.message.includes('incorrect') ? 400 : 500;
//         return res.status(statusCode).json({
//             status: 'error',
//             error: error.message
//         });
//     }
// };
module.exports = {
    register,
    verifyOtp,
    resendOtp,
    login,
    getProfile,
    logout,
    forgotPassword,
    verifyResetOtp,
    resetPassword
}