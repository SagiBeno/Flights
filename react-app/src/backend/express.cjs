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

const flights = [
  { from: "Paris", to: "Tokyo", flight: "AF274", depart: "10:30", arrive: "04:45", price: "€850" },
  { from: "New York", to: "Rome", flight: "DL198", depart: "13:00", arrive: "02:15", price: "$750" },
  { from: "TODO", to: "GET", flight: "fromBackend", depart: "12:34", arrive: "21:09", price: "$1" },
];

app.get("/destinations",(req, res) => {
    res.status(200).json( { cities } )
})

app.get('/flight-info', (req, res) => {
    res.status(200).json({ flights })
})

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})