const input = document.getElementById("chatInput")
const sendBtn = document.getElementById("sendBtn")
const chatBody = document.getElementById("chatBody")

function addMessage(text, type = "user") {

    const msg = document.createElement("div")

    msg.className = `chat-block ${type}`

    msg.innerHTML = `
<div class="chat-message">${text}</div>
`

    chatBody.appendChild(msg)

    chatBody.scrollTop = chatBody.scrollHeight

}

sendBtn.addEventListener("click", () => {

    const text = input.value.trim()

    if (!text) return

    addMessage(text, "user")

    input.value = ""

    setTimeout(() => {

        addMessage("This is a demo response", "bot")

    }, 600)

})