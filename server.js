const express = require("express")
const cors = require("cors")
const app = express()
const authRoutes = require("./routes/authRoutes")
app.use(authRoutes)
app.use(cors())
app.use(express.json())

app.listen(3000, ()=>{
  console.log("Servidor rodando na porta 3000")
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