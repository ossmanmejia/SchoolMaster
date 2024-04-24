const express = require("express")
// Importa el módulo 'express' para crear y configurar la aplicación.
const cors = require("cors")
// Importa el módulo 'cors' para permitir solicitudes de otros dominios.
const mongoose = require("mongoose")
// Importa el módulo 'mongoose' para interactuar con la base de datos MongoDB.
const dotenv = require("dotenv")
// Importa el módulo 'dotenv' para cargar variables de entorno desde un archivo '.env'.

// NO SE USA const bodyParser = require("body-parser")

const app = express()
// Inicializa la aplicación express.
const Routes = require("./routes/route.js")
// Importa las rutas definidas en el archivo 'route.js'.

const PORT = process.env.PORT || 5000
// Establece el puerto del servidor, utilizando el puerto definido en las variables de entorno o 5000 si no está definido.

dotenv.config();
// Configura las variables de entorno desde el archivo '.env'.


// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
// Utiliza el middleware 'express.json' para analizar las solicitudes JSON y establece un límite de tamaño de 10 MB.

app.use(cors())
// Utiliza el middleware 'cors' para permitir solicitudes de otros dominios.

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connectado a MongoDB"))
    .catch((err) => console.log("No se pudo conectar", err))
// Conecta a la base de datos MongoDB utilizando las opciones especificadas. Muestra un mensaje si la conexión es exitosa o si falla.

app.use('/', Routes);
// Asocia las rutas definidas en el archivo 'route.js' con la raíz de la aplicación.

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})
// Inicia el servidor express para escuchar en el puerto especificado y muestra un mensaje en la consola cuando el servidor está en funcionamiento.