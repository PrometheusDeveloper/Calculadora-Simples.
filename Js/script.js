// Nessa função ele adiciona o numero que foi clicado 

function inserir(num) {
document.querySelector(".tela").innerHTML += num;
}

// Essa função faz limap tudo que esta na tela

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

// Tudo que estiver dentro da calculadora com essa função voce apaga um por vez

function back () {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = 
    tela.substring(0, tela.length -1)
}


function somar() {
    let tela = document.querySelector('.tela').innerHTML;
if(tela) {
    document.querySelector('.tela').innerHTML = eval(tela)
}else {
document.querySelector(".tela").innerHTML = "Nenhum Comando"
}

}