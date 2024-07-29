const form = document.querySelector('#form');
const input = document.querySelector('#input');
const booksList = document.querySelector('.books-list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let userData = input.value.trim();

    if(userData === ""){
        e.preventDefault();
        alert("Please provid Books name!");
        input.focus();
        return false;
    }

    if(!isNaN(input.value)){
        e.preventDefault();
        alert("Please provid an valid Books name!");
        input.focus();
        return false;
    }

    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('my-5');

    const content = document.createElement('div');
    content.classList.add('contant');

    const taskInput = document.createElement('input');
    taskInput.classList.add('text');
    taskInput.classList.add('form-control');
    taskInput.classList.add('mb-2');
    taskInput.value = userData;
    taskInput.setAttribute("readonly", "readonly")
    taskInput.type="text";


    content.appendChild(taskInput);
    task.appendChild(content);
    booksList.appendChild(task);

    
    const action = document.createElement('div');
    action.classList.add('action');

    const editBtn = document.createElement('button');
    editBtn.classList.add("edit");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-warning");
    editBtn.innerHTML = "Edit";

    const bookDelete = document.createElement('button');
    bookDelete.classList.add("delete");
    bookDelete.classList.add("btn");
    bookDelete.classList.add("btn-danger");
    bookDelete.classList.add("mx-2");
    bookDelete.innerHTML = "Delete";

    action.appendChild(editBtn);
    action.appendChild(bookDelete);
    task.appendChild(action);

    input.value ="";

    editBtn.addEventListener('click', ()=>{
        if(editBtn.innerHTML == "Edit"){
            taskInput.removeAttribute('readonly');
            editBtn.innerHTML = "Save";
            taskInput.focus();
        }else{
            taskInput.setAttribute("readonly", "readonly");
            editBtn.innerHTML = "Edit";
        }
    })
    bookDelete.addEventListener('click', ()=>{
        booksList.removeChild(task);
    })
})