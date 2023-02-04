

const Clients = require("../models/clientsModel")



   

  
  
const getClients = async (req, res)=> {
    try {
        const nombreCompleto = req.query.nombre;
        console.log(nombreCompleto)
        if(nombreCompleto){
            const cliente = await Clients.find({
                nombreCompleto: nombreCompleto
            });
            if(!cliente.length){
                res.status(400)
                throw new Error("No hay coincidencias");
            }
            console.log(cliente)
            res.status(200).json(cliente);
        } else {
            const clientes = await Clients.find();
            res.status(200).json(clientes);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }

}


const getClientsById = async(req,res)=> {
    try {
        const client = await Clients.findById(req.params.id) 
        res.status(200).json(client)
    } catch (error) {
        console.log(error)
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

const deleteClients = async (req, res) => {
    try {
        const id = req.params.id.toString()
        console.log("desde back", typeof id, id)
      const cliente = await Clients.findById(id);
      if (!cliente) {
        res.status(400);
        throw new Error("Cliente no encontrado");
      }
      await Clients.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: `Cliente con id ${req.params.id} eliminado` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al eliminar cliente" });
    }
  };
  

module.exports = {
    getClients,
    postClients,
    updateClients,
    deleteClients,
    getClientsById
}