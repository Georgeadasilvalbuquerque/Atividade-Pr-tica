const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// conexão com banco
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1589",
  database: "techstore"
})

// testar conexão
db.connect((err)=>{
  if(err){
    console.log("Erro ao conectar:", err)
  }else{
    console.log("Conectado ao MySQL")
  }
})

// rota login
app.post("/login", (req,res)=>{

  const {email, senha} = req.body

  const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?"

  db.query(sql,[email,senha],(err,result)=>{

    if(err){
      return res.json({erro:true})
    }

    if(result.length > 0){
      res.json({login:true})
    }else{
      res.json({login:false})
    }

  })

})

app.listen(3000, ()=>{
  console.log("Servidor rodando na porta 3000")
})



app.get("/produtos", (req, res) => {

  const sql = "SELECT * FROM produtos";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json({erro: "erro ao buscar produtos"});
    }

    res.json(result);

  });

});