const sc = require("prompt-sync")({ sigint: true });
let texto =sc("Escribe una cadena de texto, yo diré la suma de los caracteres que escribas dentro --> ")
let textomin= texto.toLowerCase();
let num='0123456789'
let suma=0;
//console.log(textomin)
for (let n = 0; n < textomin.length; n++) {
    for (let i = 0; i < num.length; i++) {
        if (textomin.charAt(n)==num.charAt(i)) {
            suma=Number(num.charAt(i))+suma;
        }
    }
}
if (suma==0) {
    console.log("No había números en la cadena de texto ");
}
else{
console.log("Los caracteres que no son vocales suman: "+suma);}
