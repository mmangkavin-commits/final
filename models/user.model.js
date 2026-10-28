const pool = require('../config/db.config');

const checkEmailExists = async (email) => {
    const query = 'SELECT email FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows.length > 0;
}

const createUser = async (body) => {
    const query = `INSERT INTO users (username, email, password, otp_code, otp_expires_at)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [body.username, body.email, body.password, body.otp_code, body.otp_expires_at];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const activateUser = async (email) => {
    const query = `UPDATE users SET is_active = true, otp_code = NULL, otp_expires_at = NULL WHERE email = $1
    RETURNING id, username, email, is_active, profile_image`;
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
}

const getUserByEmail = async (email) =>{
    const query =`SELECT id,email ,is_active,password , otp_code ,otp_expires_at  FROM users WHERE email =$1`;
    const value = [email];
    const result  = await pool.query(query,value);
    return result.rows[0];
}
const updateOtp = async (email, otp, expiresAt) => {
  const query = `UPDATE users 
                 SET otp_code = $1, otp_expires_at = $2 
                 WHERE email = $3 
                 RETURNING id, email, otp_code, otp_expires_at`;
  const values = [otp, expiresAt, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};
const GetUserBuyId = async (id) =>{
    const query =`SELECT *  FROM users WHERE id =$1`;
    const value = [id];
    const result  = await pool.query(query,value);
    return result.rows[0];
}
const updatePasseord = async (email,newPassword)=>{
    const query = `upate user set password = $1, otp_code =null , otp_expires_at = NULL where email = $2 returning id , username, email,is_active,profile_image`;
    const values = [newPassword, email];
    const result = await pool.query(query,values);
    return result.rows[0];
}
module.exports = {
    checkEmailExists,
    createUser,
    activateUser,
    getUserByEmail,
    updateOtp,
    GetUserBuyId,
    updatePasseord
}