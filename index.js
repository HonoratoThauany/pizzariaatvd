function fazerPedido(){
    let nom = document.querySelector("input#tbname");

    if (nom.value == ''){
        window.alert("Por favor, preencha o nome antes de fazer o pedido.")
    }
    else {
        let valor = 0

        let selecionado = document.querySelector("input[name='tamanho']:checked");
        console.log('Tamanho:' + selecionado.value);

        if (selecionado.value == 'Pequena'){
            valor = 25
        }
        else if (selecionado.value == 'Média'){
            valor = 35
        }
        else if (selecionado.value == 'Grande'){
            valor = 50
        }
        else {
            window.alert("Por favor selecione um tamnho!")
        }
    
        let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
        console.log('Quantidade: ' + selecionados.length)

        let valorAdd = valor + selecionados.length * 5
    
        let valorTotal = document.querySelector("#total h2 strong")
        console.log('Valor total: ' + valorTotal.textContent)
        valorTotal.textContent = valorAdd;
        console.log('Valor total alterado: ' + valorTotal.textContent)
    }
  
}