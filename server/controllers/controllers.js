const User = require('../models/user')
const tranModel = require('../models/transaction')
const jwt = require('jsonwebtoken')
const test = (req, res) => {
    res.json('Ni gana ra migo finally')
}

const registerUser = async (req, res) => {
    try {
        const {email, password, conpassword} = req.body;

        if(password !=  conpassword){
            return res.json({
                error: 'Password and confirm password does not match'
            })
        }

        const exist = await User.findOne({email});

        if(exist){
            return res.json({
                error: 'Email is already taken'
            })
        }

        if(password.length < 8){
            return res.json({
                error: 'Password is too short must be 8 characters'
            })
        }

        const user = await User.create({
            email, password
        })

        return res.json(user);
    } catch(error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.json({
                error: 'Invalid email'
            })
        }

        if(password === user.password){
                const accessToken = jwt.sign({user}, 
                    "jwt-access-token-secret-key", {expiresIn: '1m'})
                const refreshToken = jwt.sign({user}, 
                    "jwt-refresh-token-secret-key", {expiresIn: '5m'})

                res.cookie('accessToken', accessToken, {maxAge: 60000})

                res.cookie('refreshToken', refreshToken, 
                    {maxAge: 300000})
                return res.json({Login: true})
            }else{
                return res.json({
                    error: 'Invalid password'
                })
            }
        } catch(error){
            console.log(error)
    }
}

const verify = (req, res) => {
    return res.json({valid: true})
}

const getProfile = (req, res) => {
    const accesstoken = req.cookies.accessToken;
    if(accesstoken) {
        jwt.verify(accesstoken, 'jwt-access-token-secret-key', {},(err ,decoded) => {
            if(err) throw err;
            res.json(decoded)
        })
    }else{
        res.json(null)
    }
}

const postTransaction = async(req, res) => {
    try {
        const {userID, tranType, description, ammount, tranDate} = req.body;
        const transaction = await tranModel.create({
            userID, tranType, description, ammount, tranDate
        })
        return res.json(transaction);
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    verify,
    getProfile,
    postTransaction
}