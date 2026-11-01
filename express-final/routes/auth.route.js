const express = require('express');
const router = express.Router();

const {
    register,
    verifyOtp,
    resendOtp,
    login,
    getProfile,
    logout,
    forgotPassword,
    verifyResetOtp,
    resetPassword,
    changePassword,
} = require('../controllers/auth.controller');
const validate = require('../middleware/validate.middleware');
const {
    registerSchema,
    verifyOtpSchema,
    resendOtpSchema,
    loginSchema,
    forgotPasswordSchema,
    verifyResetOtpSchema,
    resetPasswordSchema,
    changePasswordSchema
} = require('../validators/auth.validator');
const { isLogin } = require('../middleware/auth.middleware');

router.post('/register', validate(registerSchema), register);

router.post('/verify-otp', validate(verifyOtpSchema), verifyOtp);

router.post('/resend-otp', validate(resendOtpSchema), resendOtp);

router.post('/login', validate(loginSchema), login);

router.get('/me',isLogin,getProfile);

router.post('/logout',isLogin,logout);

router.post('/forgot-password',validate(forgotPasswordSchema),forgotPassword);

router.post('/verify-reset-otp',validate(verifyResetOtpSchema),verifyResetOtp);

router.post('/reset-password',validate(resetPasswordSchema),resetPassword);

// router.post('/change-password', validate(changePasswordSchema),changePassword);

module.exports = router;