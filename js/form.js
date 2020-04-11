var  btnCadastrar = document.querySelector("#btncadastrar");
btnCadastrar.addEventListener("click",function (event) {
    event.preventDefault();

    var formulario = document.querySelector("#formulario");

    //Extraindo Informações do Paciente do Form :
    var paciente = obtemPacienteDoFormulario(formulario);

    //Cria a TR e as TDs do paciente:

    erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeMensagensERRO(erros);
        return;
    }
    //Adiciona o paciente na tabela:
    adicionaPacienteNaTabela(paciente);

    formulario.reset();
    var mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";

});



function adicionaPacienteNaTabela(paciente) {
    var pacienteTR = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

}

function  montaTR(paciente) {

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTD(paciente.nome,"info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso,"info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura,"info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura,"info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc,"info-imc"));

    return pacienteTR;
}

function obtemPacienteDoFormulario(formulario) {
    var paciente = {
        nome:  formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura : formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value,formulario.altura.value)
    }
    return paciente;
}



function montaTD(dado,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) erros.push("Nome do paciente não informado!");
    if (paciente.altura.length == 0) erros.push("Altura do paciente não informada!");
    if (paciente.peso.length == 0) erros.push("Peso do paciente não informado!");
    if (paciente.gordura.length == 0) erros.push("O %gordura não foi informado!");
    if (!validaAltura(paciente.altura)) erros.push("Altura informada é inválida!");
    if (!validaPeso(paciente.peso)) erros.push("O peso informado é inválido!");
    return erros;
}

function exibeMensagensERRO(erros) {
    var ul = document.querySelector("#mensagens-erros");
    console.log(ul.innerHTML);
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
