// Selecting elements
const form = document.querySelector('#message-form');
const messageList = document.querySelector('#message-list');
const messageInput = document.querySelector('#message-input');

// Function to create a new message
function createMessage(text) {
  const message = document.createElement('div');
  message.classList.add('message');
  const messageText = document.createElement('p');
  messageText.textContent = text;
  const messageDate = document.createElement('span');
  messageDate.textContent = new Date().toLocaleString();
  message.appendChild(messageText);
  message.appendChild(messageDate);
  return message;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    const message = createMessage(messageText);
    messageList.appendChild(message);
    messageInput.value = '';
  }
}

// Adding event listener to the form
form.addEventListener('submit', handleSubmit);
