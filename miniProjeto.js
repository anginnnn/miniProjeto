let catalogo = [];

function adicionarProduto() {
    const nome = prompt("Digite o nome do produto:");
    const preco = parseFloat(prompt("Digite o preço do produto:"));
    const descricao = prompt("Digite a descrição do produto:");

    const produto = {
        nome,
        preco,
        descricao,
        id: catalogo.length
    };

    catalogo.push(produto);
    alert("Produto adicionado com sucesso!");
}

function buscarProduto() {
    const nome = prompt("Digite o nome do produto a ser buscado:");

    const produto = catalogo.find(p => p.nome === nome);

    if (produto) {
        alert(`ID: ${produto.id}\nNome: ${produto.nome}\nPreço: ${produto.preco}\nDescrição: ${produto.descricao}`);
    } else {
        alert("Produto não encontrado!");
    }
}

function atualizarProduto() {
    const id = parseInt(prompt("Digite o ID do produto a ser atualizado:"));

    const produto = catalogo.find(p => p.id === id);

    if (produto) {
        const preco = parseFloat(prompt("Digite o novo preço do produto:"));
        const descricao = prompt("Digite a nova descrição do produto:");

        produto.preco = preco;
        produto.descricao = descricao;

        alert("Produto atualizado com sucesso!");
    } else {
        alert("Produto não encontrado!");
    }
}

function visualizarTodosOsProdutos() {
    let mensagem = "";

    catalogo.forEach(p => {
       mensagem += `ID: ${p.id}\nNome: ${p.nome}\nPreço: ${p.preco}\nDescrição: ${p.descricao}\n\n`;
    });

    if (mensagem) {
        alert(mensagem);
    } else {
        alert("Nenhum produto cadastrado!");
    }
}

function removerProduto() {
    const id = parseInt(prompt("Digite o ID do produto a ser removido:"));

    const indice = catalogo.findIndex(p => p.id === id);

    if (indice !== -1) {
        catalogo.splice(indice, 1);
        alert("Produto removido com sucesso!");
    } else {
        alert("Produto não encontrado!");
    }
}

while (true) {
    const opcao = parseInt(prompt(`Escolha uma opção\n1 - Adicionar Produto\n2 - Buscar Produto\n3 - Atualizar Produto\n4 - Visualizar Todos os Produtos\n5 - Remover Produto\n6 - Sair`));

    switch (opcao) {
        case 1:
            adicionarProduto();
            break;

        case 2:
            buscarProduto();
            break;

        case 3:
            atualizarProduto();
            break;

        case 4:
            visualizarTodosOsProdutos();
            break;

        case 5:
            removerProduto();
            break;

        case 6:
            alert("Até breve!");
            break;

        default:
            alert("Opção inválida! Tente novamente.");
            break;
    }

    if (opcao === 6) {
        break;
    }
}