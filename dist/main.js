"use strict";

var _Cliente = require("./classes/Cliente.js");

var _Impuestos = require("./classes/Impuestos.js");

var impuesto = new _Impuestos.Impuestos(1500, 150);
var cliente1 = new _Cliente.Cliente('Federico', impuesto);
console.log(cliente1.calcularImpuesto());