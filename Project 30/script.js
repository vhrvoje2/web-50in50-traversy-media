const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const inputEl = document.getElementById('msg')
let text = 'Type something!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('change', () => {
    speed = 300 / speedEl.value
})

inputEl.addEventListener('keyup', () => {
    let msg = inputEl.value

    if (msg){
        text = inputEl.value
    }
    else{
        text = 'Type something!'
    }
})