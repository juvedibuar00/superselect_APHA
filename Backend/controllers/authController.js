// // const bcrypt = require ('bcrypt')
// // const jwt = require('jsonwebtoken')
// const userModel = require('../models/userModels.js')

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {findUserByEmail, createUser} from '../models/userModels.js'

export const register = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const userExists = findUserByEmail(email)
        //useModel.js
        if(userExists) return res.status(400).json({message: 'Email já cadastrado'})
        const passwordHash = await bcrypt.hash(password, 10)
        const userId = createUser(name, email, passwordHash)

        res.status(201).json( { message : 'Usuário criado', userId })
        } catch (error) {
            res.status(500).json( {error: error.message})
        }
        
    
}

export const login = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await userModel.findUserByEmail(email)
        if (!user) return res.status(400).json( {message: 'E-mail inválido'})
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) return res.status(400).json( { message: 'Senha inválida'})
        
        const token = jwt.sign( {id: user.id}, process.env.JWT, {expiresIn: '1h'})
        console.log(token)
        res.json({token})
    
    } catch {
        res.status(500).json( {error: error.message})
    }
}