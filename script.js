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
const backgrounds = [
  "url('https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?q=80&w=2069&auto=format&fit=crop')",
  "url('https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?q=80&w=2069&auto=format&fit=crop')",
  "url('https://images.unsplash.com/photo-1655397398736-c068e49bcd8e?q=80&w=2070&auto=format&fit=crop')",
  "linear-gradient(#fdf6e3, #fff)",
  "linear-gradient(#0f0e0d, #1a1816)"
];

function setBackground(index) {
  document.body.style.background = backgrounds[index];
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.getElementById('background-selector').classList.add('hidden');
}

// Показати/сховати меню вибору фону
document.getElementById('toggle-backgrounds').addEventListener('click', () => {
  document.getElementById('background-selector').classList.toggle('hidden');
});