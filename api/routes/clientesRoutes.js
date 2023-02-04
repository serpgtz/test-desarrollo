const express = require("express")
const router = express.Router()
const {getClients,postClients, updateClients, deleteClients,getClientsById} = require("../controllers/clientsController")


router.get("/", getClients)

router.get("/:id", getClientsById)

 router.post("/", postClients )

 router.put("/:id",updateClients) 

 router.delete("/:id",deleteClients)


 module.exports = router