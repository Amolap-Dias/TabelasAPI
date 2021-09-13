//Função com parametros para os GETTERS configurar a API
function fazGet(url){
    let request = new XMLHttpRequest()
     request.open("GET",url,false)
      request.send() 
      return request.responseText
 } 

//Função que cria linhas na tabela
function criaLinha(todo){ 
    console.log(todo)
    linha = document.createElement("lin");
    idUser = document.createElement("ti");
    id = document.createElement("ti");
    title = document.createElement("ti");
    completed = document.createElement("ti");
    
    idUser.innerHTML = todo.userId
    id.innerHTML = todo.id
    title.innerHTML = todo.title
    completed.innerHTML = todo.completed   

    linha.appendChild(idUser);
    linha.appendChild(id);
    linha.appendChild(title);
    linha.appendChild(completed);
    
    return linha;
 } 
 
//Função que cria conexão com a API e lista os dados da API
function main(){  

let data = fazGet("https://jsonplaceholder.typicode.com/todos")
let todos = JSON.parse(data);
let tabelaTODO = document.getElementById("tabelaTODO")

console.log(todos)

todos.forEach(element => { 
    let linha = criaLinha(element); 
    tabelaTODO.appendChild(linha);
});
}

//Chama a função main
main()  