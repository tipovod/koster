function sendMessage() {
  const input = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() !== "") {
    const msg = document.createElement("div");
    msg.textContent = input.value;
    messages.appendChild(msg);
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
}