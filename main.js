import { Cliente } from './classes/Cliente.js'
import { Impuestos } from './classes/Impuestos.js'

const impuesto = new Impuestos(1500, 150);
const cliente1 = new Cliente('Federico', impuesto);

console.log(cliente1.nombre);