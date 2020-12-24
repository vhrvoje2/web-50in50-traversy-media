const toasts = document.getElementById('toasts')
const btn = document.getElementById('button')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

btn.addEventListener('click', () => createNotification())

function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, 2500)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}