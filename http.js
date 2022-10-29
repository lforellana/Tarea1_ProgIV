const http= require('http')
const host= "localhost"
const port=8080
const server =http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/plain'})
    respuesta.write('Prueba servidor');
    respuesta.end()
})

server.listen(port,host,function(){
    console.log(`Servidor Inicializado: http://${host}:${port}`)
})