//declarando variáveis
let listElement= document.querySelector("#app ul")
let inputElement=document.querySelector("#app input")
let buttonElement=document.querySelector("#app button")


let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas(){
    listElement.innerHTML='';
    
    tarefas.map((todo)=>{   //map = percorrer o array
    let liElement=document.createElement("li"); //criar a li
    let tarefaText = document.createTextNode(todo);   // criar texto da tarefa
    
    //criando elementos de link para deletar a tarefa 
    let linkElement=document.createElement("a");
    linkElement.setAttribute("href","#");

    let linkText=document.createTextNode(" Excluir")
    linkElement.appendChild(linkText);

    let posicao=tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

    liElement.appendChild(tarefaText); //adiciona tarefa na li
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);//adiciona li na ul

})    

}
renderTarefas();

//função para adicionar tarefas
function addTarefas(){  
    //validação
    if(inputElement.value===''){
        alert("Digite alguma coisa")
        return false;
    }else{
        //adicionando tarefa
        let novaTarefa= inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value='';//zerar novamente o campo de input

        renderTarefas();
        salvarDados();
    }
}


buttonElement.onclick=addTarefas;

//função para excluir tarefa
function deletarTarefa(posicao){

    tarefas.splice(posicao,1);
    renderTarefas();
    salvarDados();

}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}