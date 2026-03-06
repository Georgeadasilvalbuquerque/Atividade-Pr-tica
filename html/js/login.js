function login(){

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })

    .then(res => res.json())

    .then(data => {

        if(data.login){
            alert("Bem vindo")
            window.location.href = "produto.html"
        }else{
            alert("Usuário ou senha incorretos")
        }

    })

}