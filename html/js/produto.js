let carrinho = []

function adicionarCarrinho(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    })

    atualizarCarrinho()
}

function atualizarCarrinho() {

    let divCarrinho = document.getElementById("carrinho")

    divCarrinho.innerHTML = ""

    let total = 0

    carrinho.forEach(produto => {

        divCarrinho.innerHTML += `
        <p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
        `

        total += produto.preco

    })

    divCarrinho.innerHTML += `<h3>Total: R$ ${total.toFixed(2)}</h3>`
}