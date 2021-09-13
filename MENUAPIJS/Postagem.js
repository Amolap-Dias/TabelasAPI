//Função com parametros para os GETTERS configurar a API
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send() 
    return request.responseText
 } 

//função que cria linhas na tabela
function criaLinha(postagem){ 
    console.log(postagem)
    linha = document.createElement("lin");
    idUser = document.createElement("ti");
    id = document.createElement("ti");
    title = document.createElement("ti");
    text = document.createElement("ti");
    
    idUser.innerHTML = postagem.userId
    id.innerHTML = postagem.id
    title.innerHTML = postagem.title
    text.innerHTML = postagem.body
   
    linha.appendChild(idUser);
    linha.appendChild(id);
    linha.appendChild(title);
    linha.appendChild(text);
    
    return linha;
 } 
 
//Função que cria conexão com a API e lista os dados da API
function main(){  

let data = fazGet("https://jsonplaceholder.typicode.com/posts")
let post = JSON.parse(data);
let tabelaPostagem = document.getElementById("tabelaPostagem")

console.log(post)

post.forEach(element => { 
    let linha = criaLinha(element); 
    tabelaPostagem.appendChild(linha);
});
}

//Chama a função main
main()