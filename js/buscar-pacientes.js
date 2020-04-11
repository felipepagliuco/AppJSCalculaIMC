var botaoAdicionar = document.querySelector("#buscar-pacientes")
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function() {
        var erroAJAX = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAJAX.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erroAJAX.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    });


});