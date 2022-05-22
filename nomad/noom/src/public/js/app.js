const messageList = document.querySelector('ul');
const nicknameForm = document.querySelector('#nickname');
const messageForm = document.querySelector('#message');
const socket = new WebSocket(`ws://${window.location.host}`)

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅")
})

socket.addEventListener("message", (messageEvent) => {
  console.log("New message: ", messageEvent.data)

  const li = document.createElement('li');

  li.innerText = messageEvent.data;

  messageList.appendChild(li)
})

socket.addEventListener("close", () => {
  console.log("Disconneted from the Server ❌")
})

nicknameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = nicknameForm.querySelector('input');

  socket.send(JSON.stringify({
    type: 'nickname',
    payload: input.value
  }));

  input.value = ''
})

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = messageForm.querySelector('input');

  socket.send(JSON.stringify({
    type: 'message',
    payload: input.value
  }))

  input.value = ''
})