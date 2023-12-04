const sc = require("prompt-sync")({ sigint: true });
let caras = sc("Voy a tirar3 dados, prefieres que sean de 6 caras o de 10? --> ")
let contador = 0;
let random =0;
if (caras!='6'&&caras!='10') {
    console.log("No existen dados de "+caras+" caras")
}
else{
console.log("Tiradas: ")
if (caras == '6') {
    aleatorio()
}
if (caras == '10') {
    aleatorio()
}
console.log("El total de los dados es " +contador)
}
function aleatorio() {
    for (let n = 0; n < 3; n++) {
        random = Math.floor(Math.random() * Number(caras))
        contador = contador + random;
        console.log("Ha salido el número "+random)
    }
}