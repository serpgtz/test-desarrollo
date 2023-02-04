const mongoose = require("mongoose")


const ClientSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "favor de proporcionar Nombre"]
        
    },
    apellidoP: {
        type: String,
        required:true
    },
    apellidoM: {
        type: String,
        required:true
    },
    nombreCompleto: {
        type: String,
        required: true,
        default: function() {
            return `${this.nombre} ${this.apellidoP} ${this.apellidoM}`;
        }
    },
 
    calle: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    telefono: {
        type:Number,
        required: true
    },
    
},{
    timestamps: true
})

module.exports = mongoose.model("Client", ClientSchema)