var notas = []
var textVar = document.getElementById("nota")

function salvarNota() {
    var inputText = textVar.value

    if (inputText.trim() === "") {

        alert("Digite uma tarefa");

        return
    }
    else {
        notas.push(inputText)
        carregarNotas()
    }



    function carregarNotas() {
        const lista = document.getElementById('listaNotas');
        lista.innerHTML = "";

        notas.forEach((nota, index) => {
            const li = document.createElement('li');
            li.textContent = nota;
            lista.appendChild(li);
        });
    }

}


