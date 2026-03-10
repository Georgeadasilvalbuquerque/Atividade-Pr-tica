const bcrypt = require("bcrypt")
const db = require("../database/connectio")

const login = (req,res)=>{

    const {email, senha} = req.body

    const sql = "SELECT * FROM usuarios WHERE email = ?"

    db.query(sql,[email], async (err,result)=>{

        if(err){
            return res.json({erro:true})
        }

        if(result.length === 0){
            return res.json({login:false})
        }

        const usuario = result[0]

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if(senhaValida){
            res.json({login:true})
        }else{
            res.json({login:false})
        }

    })
}

module.exports = { login }