//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let totalAmigos = 0;

function addAmigo(){
    let nome = document.querySelector('#amigo').value;
    
    if(nome == ""){
        alert("Por favor, insira um nome.");

    } else if(listaDeNomes.includes(nome)){
        alert('Esse nome já foi adicionado');
    }
    else{
    listaDeNomes.push(nome);
    totalAmigos++;
    }
    
console.log(listaDeNomes);
}

console.log(totalAmigos);