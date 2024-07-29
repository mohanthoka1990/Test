const addMessage  = document.querySelector("#chat-container");
const message = document.querySelector("#message-input");
const send  = document.querySelector("#send-button");

const messageContainer =document.querySelector("#message-container")

addMessage.addEventListener('submit', (e)=>{
    e.preventDefault();
    const messageValue = message.value.trim();
    
    const paragraph = document.createElement('p');
    paragraph.textContent = messageValue;
    messageContainer.appendChild(paragraph); 
    
    message.value = "";
 
});





