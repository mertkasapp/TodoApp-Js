const addTaskButton=document.querySelector(".addTask");
const todoInput=document.querySelector(".todoInput");
const todosContainer=document.querySelector(".todos");

const renderTodoItem=(textparametresi)=>{
const todoItemElement=document.createElement("li"); // li 
todoItemElement.classList.add("todoItem"); // li classı
const textElement=document.createElement("p"); // p tagı 
textElement.classList.add("todoText")
textElement.innerText=textparametresi
const completeButton=document.createElement("button")
const deleteButton=document.createElement("button");
deleteButton.innerText="Delete"
deleteButton.classList.add("deleteButton")
completeButton.classList.add("completeButton")
completeButton.innerText="Complete";
deleteButton.addEventListener("click",()=>{todoItemElement.remove()})
completeButton.addEventListener("click",()=>{todoItemElement.classList.toggle("completed")})
todoItemElement.appendChild(completeButton)
todoItemElement.appendChild(deleteButton)
todosContainer.appendChild(todoItemElement);
todoItemElement.appendChild(textElement);
}

const addTask=()=>{
    if(todoInput.value===""){
        alert("Lütfen İçeriği Doldurun")
    }
    else{
        renderTodoItem(todoInput.value)
        todoInput.value="";
        todoInput.focus()
    }
}


addTaskButton.addEventListener("click",addTask);


// <li class="todoItem">
// <button class="completeButton">Complete</button>
// <button class="deleteButton">Delete</button>
// <p class="todoText">Test Something</p>
// </li>