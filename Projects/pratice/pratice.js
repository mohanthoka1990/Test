// let heading = document.getElementsByTagName('h1');
// let paragraph = document.getElementsByClassName('paragraph');
// let link = document.getElementById('link');

// console.log(heading);
// console.log(paragraph);
// console.log(link);

// let heading = document.querySelectorAll("h1");
// let paragraph = document.querySelector('.paragraph');
// let link = document.querySelector('#link');
// console.log(link);
// let parent = document.querySelector('.container');

// console.log(parent.children);
// let heading = document.querySelector('h1');
// console.log(heading.parentNode);

// let paragraph = document.querySelector('.paragraph');

// console.log(paragraph.previousElementSibling);

// let heading = document.querySelector('h1');
// heading.innerHTML = "This is change with JS."
// let paragraph = document.querySelector('.paragraph');
// paragraph.innerHTML = "This is my Paragraph";

// let heading2 = document.createElement('h2');
// heading2.innerHTML = "this my heading 2";
// let parent = document.getElementsByTagName('div');
// parent[0].appendChild(heading2);
// let paragraph = document.querySelector('.paragraph');
// paragraph.classList.remove('paragraph');
// paragraph.classList.add("New-paragraph-class")
// 
// let firstArray = [1, 2, 3, 4,5,6];
// let secondArray = [3, 4, 5, 6];

// let result = [];  
  
// for(let i = 0; i < firstArray.length; i++){
//    for(let j = 0; j < secondArray.length; j++){
//     if(firstArray[i] === secondArray[j]){
//         result.push(firstArray[i]);
//     }
//    } 
// }
// console.log(result);

// const button = document.getElementById('showButton');
// const paragraph = document.querySelector('.paragraph');
// const result = document.getElementById('paragraph1');

// button.addEventListener('click', (e)=> {
//     e.preventDefault()
//     // result.textContent = paragraph.textContent;
//     // paragraph.style ="display:none";

//     // let division = document.createElement('div')
//     // let para = document.createElement('p');
//       result.textContent = paragraph.textContent;
//     // division.appendChild(para);
//     // console.log(result.value)
    

// });


// const button = document.getElementById('showButton');
// const paragraph = document.querySelector('.paragraph');
// const result = document.getElementById('paragraph1');

// button.addEventListener('click', (e) => {
//     e.preventDefault();

//     let division = document.createElement('div');

//     let para = document.createElement('p');

//     para.textContent = paragraph.textContent;

//     division.appendChild(para);

//     result.appendChild(division);

// });

// JS Task - 59
// let heading = document.querySelector('h1');

// let button = document.querySelector('#button')

// button.addEventListener('click', ()=>{
//     heading.textContent = "Change content";
// })

//JS Task 60
// let heading = document.querySelector('h1');
// let button = document.querySelector('#button')

// button.addEventListener('click', ()=>{
//     heading.style.color="green";
// });

// JS Task 61

// let divEl = document.querySelector('div');
// let button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     let newEl = document.createElement('p');
//     newEl.textContent = "Hello World";
//     divEl.appendChild(newEl);
// });

//JS Task 62
// let  divEl = document.querySelector('div');
// let paragraph = document.querySelector('p');
// let button = document.querySelector('button');
// let newButton = document.createElement('button');
// newButton.textContent = "Remove Content";
// divEl.appendChild(newButton);

// newButton.addEventListener('click', ()=>{
//     divEl.removeChild(paragraph);
// });

//Js Task 63


// const element = document.getElementById('myElement');

//         element.classList.add('new-class');

//         element.classList.remove('old-class'); // assuming 'old-class' exists

//         element.addEventListener('click', function() {
//             element.classList.toggle('active');
//         });





// form
// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');
// const password = document.querySelector('#password');


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let nameValue = name.value.trim();
//     let emailValue = email.value.trim();
//     let phoneValue = phone.value.trim();
//     let passwordValue = password.value.trim();


//     if(nameValue === ""){
//         e.preventDefault();
//         alert("Pleas provid the name!");
//         name.focus();
//         return false;
//     };

//     if(!isNaN(nameValue)){
//         e.preventDefault();
//         alert("Pleas provid a valid name!");
//         name.focus();
//         return false;  
//     }
//     if(emailValue === ""){
//         e.preventDefault();
//         alert("Pleas provid an email!");
//         email.focus();
//         return false;
//     };
//     if(phoneValue === ""){
//         e.preventDefault();
//         alert("Pleas provid the phone number!");
//         phone.focus();
//         return false;
//     };
//     if(phoneValue.length < 10 || phoneValue.length > 10){
//         e.preventDefault();
//         alert("Pleas provid the valid phone number!");
//         phone.focus();
//         return false;
//     }
//     if(passwordValue === ""){
//         e.preventDefault();
//         alert("Pleas provid the password!");
//         password.focus();
//         return false;
//     };
//     if(passwordValue.length < 5){
//         e.preventDefault();
//         alert("password cantbe less then 5 digits!");
//         password.focus();
//         return false;
//     }
//     alert("Data saved Successfully");
// });


const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const tasks = document.querySelector('.tasks');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const userData = input.value;

    if(!userData){
        alert("Please give some task before submitting!");
        return;
    }
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('mb-3');

    const content = document.createElement('div');
    content.classList.add('content');

    const taskInput = document.createElement('input');
    taskInput.classList.add('text');
    taskInput.classList.add('form-control');
    taskInput.classList.add('mb-2');
    taskInput.value = userData;
    taskInput.setAttribute("readonly", "readonly")
    taskInput.type="text";

    content.appendChild(taskInput);
    task.appendChild(content);
    tasks.appendChild(task);

    const action = document.createElement('div');
    action.classList.add('action');

    const edit = document.createElement('button');
    edit.classList.add("edit");
    edit.classList.add("btn");
    edit.classList.add("btn-warning");
    edit.innerHTML = "Edit";

    const task_delete = document.createElement('button');
    task_delete.classList.add("delete");
    task_delete.classList.add("btn");
    task_delete.classList.add("btn-danger");
    task_delete.classList.add("mx-2");
    task_delete.innerHTML = "Delete";

    action.appendChild(edit);
    action.appendChild(task_delete);
    task.appendChild(action);


    input.value = "";
    //Edit user data

    edit.addEventListener('click', ()=>{
        if(edit.innerHTML == "Edit"){
            taskInput.removeAttribute('readonly');
            edit.innerHTML = "Save";
            taskInput.focus();
        }else{
            taskInput.setAttribute("readonly", "readonly");
            edit.innerHTML = "Edit";
        }
    })
    //Delete User data
    task_delete.addEventListener('click', ()=>{
        tasks.removeChild(task);
    })
})