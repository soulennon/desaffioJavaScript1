window.onload = function () {
    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let idx in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);

    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompta = document.querySelector("#mostraTotalCompra");
    const armazenaItem = [];
    var totalPedido = 0;

    itemProduto.forEach((item) => {
        item.addEventListener('click', () => {
            if (armazenaItem.indexOf(item.textContent) == -1) {
               li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);
                armazenaItem.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
        });
    });
    const cestaC = document.querySelectorAll("#cestaDoCliente");
    const listaa = document.querySelector("ul#cestaDoCliente");
    cestaC.forEach((item) => {
        item.addEventListener('click', (itemCesta) => {
            var idx = armazenaItem.indexOf(itemCesta.target.textContent);
            if (idx > -1) {
                totalPedido -= Number(itemCesta.target.dataset.preco);
                cestaCliente.removeChild(listaa.childNodes[idx]);
                armazenaItem.splice(idx, 1);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        });
    });
};
