const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, verify, getProfile} = require('../controllers/controllers');
const { verifyUser } = require('../middleware/jwtAuth');


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/verifyuser', verifyUser, verify)
router.get('/userdata', getProfile)

module.exports = router 