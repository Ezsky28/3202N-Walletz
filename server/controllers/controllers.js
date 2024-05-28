const User = require('../models/user')
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

        if(password != user.password){
            return res.json({
                error: 'Invalid password'
            })
        }else{
            return res.json('Success')
        }

    } catch(error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}