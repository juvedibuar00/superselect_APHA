// const mysql = require ('mysql2/promise')
import mysql from 'mysql2/promise'
// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

})

// module.exports = pool
export default pool