function abrir() {
    document.getElementById("menudrop").classList.toggle("mostrar");
}
window.addEventListener("click", function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("menudrop");
    if (dropdown.classList.contains('mostrar')) {
        dropdown.classList.remove('mostrar');
    }
}
})

function cadastro() {
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    email = document.getElementById("mail").value;
    endereco = document.getElementById("endrco").value;
    mensagem = document.getElementById("msg").value;
    telefone = document.getElementById("telefone").value;

    if (nome=="" || sobrenome =="" || email =="" || mensagem=="" || telefone ==""){
        window.alert("Preencha Os Campos Obrigatórios!")
    } 
    else{
        document.getElementById("confirmar").innerHTML= "<h2>Confirme seus Dados</h2>" +
        "<p class='left'> <strong>Nome:</strong> " + nome + " " + sobrenome + "</p>" +
        "<p class='left'> <strong>Email:</strong> " + email + "</p>" +
        "<p class='left'> <strong>Telefone:</strong> " + telefone + "</p>" +
        "<p class='left'> <strong>Endereço:</strong> " + endereco + "</p>" + 
        "<p class='left'> <strong>Mensagem:</strong> " + mensagem + "</p>";
    }
}


function limpar() {
    document.getElementById("confirmar").innerHTML= "";
}


