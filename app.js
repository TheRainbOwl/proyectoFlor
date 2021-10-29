const express = require("express") // Nos permite utilizar funciones express.
const app = express() // Usams funcion express
const {render} = require("pug")
const port = 3000  // Puerto para server jsjs


// ARCHIVOS ESTATICOS
app.use("/views", express.static(__dirname))
app.use("/css", express.static("public/css"))
app.use("/images", express.static("public/images"))
app.use("/logos", express.static("public/logos"))
app.use(express.urlencoded({extended: false}))

// PETICIONES

app.get('/', (req, res, next) => {
	res.render('index.pug', {root: __dirname})
});

// SERVER ESCUCHANDO EN EL PUERTO 3000

app.listen(port, () =>{
    console.log(`Servidor corriendo en: http://localhost:${port}`)
})