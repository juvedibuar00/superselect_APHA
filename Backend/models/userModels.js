// const pool = require('../config/db.js')
import pool from '../config/db.js'


// Primeiro método
export const findUserByEmail = async(email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    return rows[0]
   
}
// Segundo método
export const createUser = async (nome, email, passwordHash) => {
    const [result] = await pool.query (
        'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, passwordHash]
    )
    return result.insertId
}

// module.exports = {findUserByEmail, createUser}