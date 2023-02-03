

const Clients = require("../models/clientsModel")


const getClients = async (req, res)=> {
    try {
        const clientes = await Clients.find()
        res.status(200).json(clientes)
    } catch (error) {
        console.log("desde Back",error)
    }
   
}

const postClients = async (req, res)=> {
    try {
        console.log(req.body)
        if(!req.body){
            res.status(400)
            throw new Error("faltan los datos")
        }
        const cliente = await new Clients(req.body)
        const clienteSave = await cliente.save()
        res.status(200).json(clienteSave)

        }catch (error) {
            console.log(error)
            
            
        }

    } 
   
    


const updateClients = async (req, res)=> {

    
    try {
        const cliente = await Clients.findById(req.params.id)
        if (!cliente) {
            res.status(400)
            throw new Error('cliente no encontrado')
          }
          
        const updateCliente =  await Clients.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json(updateCliente)
    } catch (error) {
        console.log(error)
    }   
  
}

const deleteClients = async (req, res)=> {

    try {
        const cliente = await Clients.findById(req.params.id)
        if (!cliente) {
            res.status(400)
            throw new Error('cliente no encontrado')
          }
          await Clients.remove()
          res.status(200).json({ id: req.params.id})
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({message:`delete clients con id ${req.params.id}`})
}


module.exports = {
    getClients,
    postClients,
    updateClients,
    deleteClients
}