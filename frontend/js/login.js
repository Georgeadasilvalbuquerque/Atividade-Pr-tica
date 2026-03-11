function login(){

 const email = document.getElementById("email").value
 const senha = document.getElementById("senha").value
console.log("O que o JS pegou da tela:", email, senha)
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
     setTimeout(() => {

     window.location.href = "produto.html"

     }, 1500)
   }else{
     alert("Usuário ou senha incorretos")
   }

 })

 .catch(err=>{
   console.error("Erro:",err)
   alert("Erro ao conectar com servidor")
 })

}