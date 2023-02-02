const getClients = (req, res)=> {
    res.status(200).json({message:"get clients"})
}

const postClients = (req, res)=> {
    console.log(req.body)
    res.status(200).json({message:"post clients"})
    
}

const updateClients = (req, res)=> {
    res.status(200).json({message:`update clients con id ${req.params.id}`})
}

const deleteClients = (req, res)=> {
    res.status(200).json({message:`delete clients con id ${req.params.id}`})
}


module.exports = {
    getClients,
    postClients,
    updateClients,
    deleteClients
}