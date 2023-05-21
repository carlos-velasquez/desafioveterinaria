//leer el archivo
const fs = require('fs')

//json en una constante
const rutasJson = './citas.Json';

const registrar = (nuevaCita) => {
   
    const citas = JSON.parse(fs.readFileSync(rutasJson, 'utf-8'))

    citas.push(nuevaCita);

    contenidoNuevaCitas = JSON.stringify(citas)

    fs.writeFileSync(rutasJson, contenidoNuevaCitas);

    return 'ingresado correctamente'

    // verificar si existe el archivo
    //aca llegas los cinco y se guardan y lo crea vacio
   /* fs.access(rutasJson, fs.constants.F_OK, (err) => {
        if (err)   fs.writeFileSync(rutasJson, "");
        
        //lo lee
        let contenidoJson = fs.readFileSync(rutasJson, 'utf-8')
        //lo pasa a objeto
        let objetoJson = JSON.parse(contenidoJson)

        // a ese objeto le agrega una nueva
        objetoJson.push(nuevaCita)
        //lo striguifea, lo pasa a palabra
        contenidoJson = JSON.stringify(objetoJson)
        //escribe el archivo y envia a parametros
        fs.writeFileSync('./citas.json', contenidoJson)
    });

    return "ok";*/
};

const leer = () => {
    //leo el json citas o imprimo en consola
    const alldates = fs.readFileSync(rutasJson, 'utf-8')
    // transformo el archivo en json
    const alldatesJson = JSON.parse(alldates)

    // retornar para lea el archivo en index.js
    return alldatesJson;

    //(((  imprimo el archivo
    //for (data of alldatesJson) {
    //    const tempContent = `
    //Nombre = ${data.nombre}
    //edad = ${data.edad}
    //animal = ${data.animal}
    //color = ${data.color}
    //enfermedad = ${data.enfermedad}
    //-------
    //`
    //   console.log(tempContent)
    //}  )))

    //console.log(alldatesJson)

}

module.exports = { registrar, leer }