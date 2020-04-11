
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nuticionista-1";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

    var peso =  paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdlinhaIMC = paciente.querySelector(".info-imc");

    var peso_e_valido = validaPeso(peso);
    var altura_e_valida = validaAltura(altura);

    if(!peso_e_valido){
        console.log("Peso inválido");
        peso_e_valido = false;
        tdlinhaIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!altura_e_valida){
        console.log("Altura é inválida!");
        altura_e_valida = false;
        tdlinhaIMC.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (peso_e_valido && altura_e_valida){
        var imc = calculaIMC(peso,altura);
        tdlinhaIMC.textContent = imc;
    }
}

function validaPeso(peso) {
    return peso >= 0 && peso <= 1000;
}

function validaAltura(altura) {
    return altura >= 0 && altura <= 3.00;
}


function calculaIMC(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}












