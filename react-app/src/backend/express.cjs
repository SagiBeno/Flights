const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), "public")))

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
  { name: "Paris", country: "France", image: "/paris.jpg" },
  { name: "Tokyo", country: "Japan", image: "/tokyo.jpg" },
  { name: "New York", country: "USA", image: "/newyork.jpg" },
  { name: "Lipseszentadorján", country: "Hungary", image: "/lipseszentadorjan.jpg" },
  { name: "Kazincbarcika", country: "Hungary", image: "/kazincbarcika.jpg" },
  { name: "Iklódbördőce", country: "Hungary", image: "/iklodbordoce.jpg" },
];

app.get("/destinations",(req, res) => {
    res.status(200).json({cities})
})

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})