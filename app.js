console.clear()

let argv = require('process').argv
const comando = argv[2];

require('colors')

const {listar} = require('./funcionesDeTareas');

switch (comando) {
    case "listar":
        listar()
        break;
    default:
        console.log('Atención - Tienes que pasar una acción'.red);
        console.log('Comandos Disponibles:' , 'listar'.green);
        break;
}
