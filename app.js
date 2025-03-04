//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let sorteado = [];

//Essa função adiciona o nome dentro da array e já verifica se o nome é repetido e se o campo está vazio.

function adicionaAmigo(){
    let nome = document.querySelector('input').value;
    //Já coloca todo nome com primeira legra maiuscula.
    nome = nome.substring(0,1).toUpperCase().concat(nome.substring(1));

    if(nome == ""){
        alert("Por favor, insira um nome.");

    } else if(listaDeNomes.includes(nome)){
        alert('Esse nome já foi adicionado');
        limparCampo()
    }
    else{
    listaDeNomes.push(nome);
    limparCampo();
    limpaLista();
    montarLista();

    }    
console.log(listaDeNomes);
}

//Essa função limpa o campo após adicionar um campo.

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

// Essa função vai montando a lista de nomes que foram adicionados para o sorteio.
function montarLista(){
    let lista = document.getElementById('listaAmigos');
    for(i=0; i < listaDeNomes.length; i++){
        lista.innerHTML += `<li>${listaDeNomes[i]}</li>`;
    }
}
// Função para deixar a lista bonitinha após novo nome adicionado.
function limpaLista(){
    document.getElementById('listaAmigos').innerHTML="";
    document.getElementById('resultado').innerHTML="";
}

// Função para sortear o seu amigo Secreto.
function sorteioAmigos(){
    if(listaDeNomes.length>0){
    let numSorteado = parseInt(Math.random()*listaDeNomes.length);
    sorteado = listaDeNomes[numSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> Seu amigo secreto é o ${sorteado}.</li>`;
    }
    else {
        adicionaAmigo();
    }
}
