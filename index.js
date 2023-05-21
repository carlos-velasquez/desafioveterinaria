//importar los archivos
const { registrar, leer } = require('./operaciones')


// a que funcion quiero ir
const operation = process.argv.slice(2)[0];




let resp = '';

if (operation === 'leer') {
    //ocupo lo que importe
    //leer();
    //console.log('ir a leer');
    const content = leer();

    //lo que quiero que la constante resp tenga o la data que voy a leer no la guerde en una constatnte sino  que la agregue a resp
    for (data of content) {
        resp += `
          Nombre = ${data.nombre}
          edad = ${data.edad}
          animal = ${data.animal}
          color = ${data.color}
          enfermedad = ${data.enfermedad}
          -------
        `;

    }
    console.log(resp)

} else if (operation === 'registrar') {

    //llamar a registar
    //console.log('ir a registar');
    //let resp = registrar();

    //que tienen los parametros
    const params = process.argv.slice(3);
    //console.log(parametros)

    //validar el largo del arreglo
    if (params.length != 5) {
        resp = "Todos los parametros son ablogatorios"
    } else {
        const [nombre, edad, tipo, color, enfermedad] = params;

        let nuevaCita = {
            "nombre": nombre,
            "edad": edad,
            tipo,
            color,
            enfermedad
        };

        resp = registrar(nuevaCita);
    }



}
console.log(resp)

