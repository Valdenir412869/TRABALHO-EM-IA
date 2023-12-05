document
.getElementById("formulario-cadastro")
.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const form = { nome, user, email, senha }

    alert(JSON.stringify(form, null, 2))

    // fetch('http://localhost:8080', {
    // method: 'POST' ,
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(form)
    // })  
    
    const arqCad = new Blob([JSON.stringify(form, null, 2)], { type: 'application/json' });
    saveAs(arqCad, "Arquivo_Cadastro_Usuario.txt");

    // Limpar os campos do formulário após o envio
    document.getElementById("nome").value = "";
    document.getElementById("user").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
})
    


