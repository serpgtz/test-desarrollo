const express = require("express")
const router = express.Router()
const {getClients,postClients, updateClients, deleteClients} = require("../controllers/clientsController")


router.get("/", getClients)


 router.post("/", postClients )

 router.put("/:id",updateClients) 

 router.delete("/:id",deleteClients)


 module.exports = router