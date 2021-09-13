//Função com parametros para os GETTERS configurar a API
function fazGet(url){
    let request = new XMLHttpRequest()
     request.open("GET",url,false)
      request.send() 
      return request.responseText
 } 

//Função que cria linhas na tabela
function criaLinha(album){ 
    console.log(album)
    linha = document.createElement("lin");
    idUser = document.createElement("ti");
    id = document.createElement("ti");
    title = document.createElement("ti");
    
    idUser.innerHTML = album.userId
    id.innerHTML = album.id
    title.innerHTML = album.title
   
    linha.appendChild(idUser);
    linha.appendChild(id);
    linha.appendChild(title);
    
    return linha;
 } 
 
//Função que cria conexão com a API e lista os dados da API 
function main(){  

let data = fazGet("https://jsonplaceholder.typicode.com/albums")
let albuns = JSON.parse(data);
let tabelaAlbum = document.getElementById("tabelaAlbum")

console.log(albuns)

albuns.forEach(element => { 
    let linha = criaLinha(element); 
    tabelaAlbum.appendChild(linha);
});
}

//Chama a função main
main()