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

//TODO app.post(/register

const port = 3333

app.get("/destinations",(req, res) => {

})

app.get('/flight-info', (req, res) => {

})

app.listen(port, () => {
    console.log("Szerver mükszik itt: " + port)
})