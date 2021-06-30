import validator from './validator.js';

console.log(validator);

let boton = document.getElementById("miboton");
boton.addEventListener("click",btnValidarTarjeta);

function btnValidarTarjeta(){alert("Entró a btnValidarTarjeta")
    if("click"){    
document.getElementById("PagA").style.display="none";
document.getElementById("PagB").style.display="inline";
}