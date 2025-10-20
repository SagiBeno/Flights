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

const cities = [
  { name: "Paris", country: "France", image: "TODO-add-static-img-url-paris.jpg" },
  { name: "Tokyo", country: "Japan", image: "TODO-add-static-img-url-tokyo.jpg" },
  { name: "New York", country: "USA", image: "TODO-add-static-img-url-newyork.jpg" },
  { name: "Lipseszentadorján", country: "GET", image: "cities-from-backend.jpg" },
  { name: "Kazincbarcika", country: "GET", image: "cities-from-backend.jpg" },
  { name: "Iklódbördőce", country: "GET", image: "cities-from-backend.jpg" },
];

app.post("/destinations",(req, res) => {
    res.status(200).json()
})

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})