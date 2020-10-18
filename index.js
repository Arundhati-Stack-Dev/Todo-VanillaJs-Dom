
var todoList = [
    {
    id : 1,
    title: "Do Yoga",
    description:"hi"
},
// {
//     id:2,
//     title: " Buy Veggies",
//     // description:"hi there"
// }
];


function renderTodoItems(){

    var todoListDiv = document.getElementsByClassName('Todo-List')[0];
     
    var body="";

    todoList.forEach(item =>{
        body += `<div class="Todo-item" data-id ="${item.id}">
        <div class="todo-title">
            ${item.title}
            <br/>
            ${item.description}
        </div>
        <div class="todo-actions">
            <i class="fas fa-edit"></i>
            <span><i class="fas fa-trash-alt" class="trash" onclick="deleteItem(${item.id})"></i></span>
        </div>
        </div>`
    })

    todoListDiv.innerHTML = body;
      
  
}
renderTodoItems();

var addButton = document.getElementById('addButton');
var inputTextBox = document.getElementById('todoInputBox')

addButton.onclick = function(e){
    var newtodoTitle = inputTextBox.value;
    todoList.push({
        id: todoList[todoList.length - 1].id + 1,
        title: newtodoTitle,
        description: "added"
    })
    renderTodoItems();
}

function deleteItem(id){
   todoList = todoList.filter(item => item.id != id);
   renderTodoItems();
}

