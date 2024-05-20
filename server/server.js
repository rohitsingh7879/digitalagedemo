const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// var bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//to uploads files
const multer = require('multer')
const path = require('path')
const userModel = require('./models/UserModel')
const postModel = require('./models/PostModel')

const cookieParser = require('cookie-parser')
const port = 8000
const salt = 10
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())
// app.use(express.static('Public'))
app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1/digitalAge", { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected....")
})

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body

    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            console.log(err)
        }

        // console.log("user data", )
        userModel.create({ name, email, password: hash })
        return res.status(200).json({ status: "Signup success" })

    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (_err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, name: user.name }, "jwt-secret-key", { expiresIn: '1d' })
                        // console.log(token)
                        // first parameter is name and second is value which is token above
                        res.cookie('token', token)
                        return res.status(200).json({ status: "login succesfull" })
                    } else {
                        return res.json("Password was incorrect")
                    }
                })
            } else {
                return res.json("User doesn't exist")
            }
        })
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    // console.log(req.cookies.token)
    if (!token) {
        return res.json("The token is missing")
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, result) => {
            // console.log(result)
            if (err) {
                return res.json("the token was wrong")
            } else {
                req.email = result.email
                req.name = result.name
                next()
            }
        })
    }
}
app.get('/', verifyUser, (req, res) => {
    return res.json({ email: req.email, name: req.name })
})

app.get('/logout', (_req, res) => {
    res.clearCookie('token')
    return res.status(200).json({ status: "logout succesfull" })
})

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "Public/Images")
    },
    filename: (_req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage
})
app.post('/create-blog-post', upload.single('file'), (req, res) => {
    try {
        postModel.create({
            post_id: req.body.post_id,
            title: req.body.title,
            description: req.body.description,
            file: req.file.filename
        }).then(result => {
            return res.status(200).json(result)
        }).catch((error) => {
            return res.json(error)
        })
    } catch (error) {
        return res.json({ Error: error })
    }

})

app.get('/get-blog-posts', (_req, res) => {
    postModel.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.json(err))
})

app.get('/getpostbyid/:id', (req, res) => {
    const id = req.params.id
    postModel.findById({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/editpostbyid/:id', (req, res) => {
    const id = req.params.id
    const tittle = req.body.tittle
    const desc = req.body.desc
    postModel.findByIdAndUpdate({ _id: id }, {

        tittle: tittle,
        desc: desc
    })
        .then(res => res.setHeader('Content-Type', 'text/plain'))
        .catch(err => res.json(err))
})

app.delete('/delete-blog-posts/:id', (req, res) => {
    postModel.findByIdAndDelete({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})    