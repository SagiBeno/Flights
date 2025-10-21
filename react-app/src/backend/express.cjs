const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const mysql = require("mysql2")

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), "public")))

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "flights"
})

app.post("/login", (req, res) => {
    const {email, password} = req.body
    //console.log("Login data: ", email, password)

    conn.connect(connectError => {
        if(connectError) console.warn(connectError)
        else {
            //console.log("Sikeres connect")
            conn.query(`SELECT username, email, password FROM accounts WHERE email="${email}" AND password="${password}"`,
                (err, result, fields) => {
                    if(err) console.log(err)
                    else if (result) {
                        const users = [...result]
                        

                        if (users.length < 1) res.status(300).json({login: false})
                        else {
                            res.status(200).json({login: true, username: result.username})
                        }
                        
                    }
                })
        }
    })


    /*const { email, password } = req.body
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
        res.status(200).json({ user })
    } else {
        res.sendStatus(401)
    }*/
})

app.post("/register", (req, res) => {
    console.log(users)
    const { username, email, password } = req.body
    const existingEmail = users.find(u => u.email === email)
    const existingUserName = users.find(u => u.username === username)
    if (existingUserName) {
        res.status(409).json({ error: "Username already exists" })
    } 
    else if (existingEmail) {
        res.status(409).json({ error: "Email already registered" })
    } 
    else {
        const newUser = { username, email, password }
        users.push(newUser)
        res.status(201).json({ user: newUser })
    }
})

app.get("/destinations",(req, res) => {
    conn.connect(connectError => {
        if(connectError) console.warn(connectError)
        else {
            conn.query(`SELECT * FROM destinations`,
                (err, result, fields) => {
                    if(err) console.log(err)
                    else if (result) {
                        const dest = [...result]
                        
                        if (dest.length < 1) res.sendStatus(300)
                        else {
                            res.status(200).json(dest)
                            //console.log(dest)
                        }
                        
                    }
                })
        }
    })
})

app.get('/flight-info', (req, res) => {
    conn.connect(connectError => {
        if(connectError) console.warn(connectError)
        else {
            conn.query(`SELECT * FROM flights`,
                (err, result, fields) => {
                    if(err) console.log(err)
                    else if (result) {
                        const flights = [...result]
                        
                        if (flights.length < 1) res.sendStatus(300)
                        else {
                            res.status(200).json(flights)
                            //console.log(flights)
                        }
                        
                    }
                })
        }
    })
})  

const port = 3333

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})