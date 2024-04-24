const mongoose = require("mongoose")
// Importa el módulo 'mongoose' para interactuar con la base de datos MongoDB.

const adminSchema = new mongoose.Schema({
    // Define un esquema para la colección 'admin'.

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Admin"
    },
    schoolName: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model("admin", adminSchema)
// Exporta el modelo 'admin' creado a partir del esquema definido, para que pueda ser utilizado en otras partes de la aplicación.