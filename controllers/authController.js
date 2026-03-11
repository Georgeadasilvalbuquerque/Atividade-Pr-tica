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

// NOVA Função de Cadastro (Usando bcrypt.hash)
const cadastrar = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // 1. Transforma a senha digitada em um Hash seguro
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        // 2. Salva o email e a senha criptografada no banco
        const sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";

        db.query(sql, [email, senhaHash], (err, result) => {
            if (err) {
                console.log("Erro no banco:", err);
                return res.json({ sucesso: false, mensagem: "Erro ao salvar no banco." });
            }
            res.json({ sucesso: true, mensagem: "Usuário cadastrado com sucesso!" });
        });

    } catch (erro) {
        console.log("Erro no bcrypt:", erro);
        res.json({ sucesso: false, mensagem: "Erro interno no servidor." });
    }
}

// Exporte as DUAS funções
module.exports = { login, cadastrar }