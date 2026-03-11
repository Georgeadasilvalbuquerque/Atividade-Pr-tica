function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação básica
    if(!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.sucesso) {
            setTimeout(() => {
               alert("Cadastro feito com sucesso")
                window.location.href = "login.html";
            }, 1500)

        } else {
            alert("Erro: " + data.mensagem);
        }
    })
    .catch(err => {
        console.error("Erro:", err);
        alert("Erro ao conectar com servidor");
    });
}