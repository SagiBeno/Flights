const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const users = [ //TODO adatbázis kéne ide sztem
    { username: 'JohnDoe', email: 'JohnDoe@example.com' , password: '12345678' }
]

app.post("/login", (req, res) => {
    const { email, password } = req.body
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
        res.status(200).json({ user })
    } else {
        res.sendStatus(401)
    }
})

//TODO app.post(/register

const port = 3333

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})