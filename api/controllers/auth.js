import { db } from '../connect.js'

export const register = (req,res) => {
    //Check if user exists
    const q = 'Select from user where username = ?'

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("user already exists!")
    })

    //Create new user
    //hash password
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {

}