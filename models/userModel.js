const db = require("../database/connectio")

const buscarUsuario = (email, senha, callback)=>{

    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?"

    db.query(sql,[email,senha],callback)

}

module.exports = {buscarUsuario}