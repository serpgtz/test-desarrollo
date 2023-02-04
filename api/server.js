const express = require("express")
const dotenv = require("dotenv").config()
const connectBD = require("./config/db")
const cors = require('cors')
const port = process.env.PORT || 5000;



connectBD()



const  app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use("/api/clientes", require("./routes/clientesRoutes"))


app.listen(port, ()=> console.log(`Server running on port ${port}`))