const insert = document.getElementById('insert')
let historyList = []

window.addEventListener('keydown', (event) => {
    if (historyList.length > 3){
        historyList.shift()
    }
    historyList.push(`  [${event.key === ' ' ? 'Space' : event.key}, ${event.keyCode}, ${event.code}]`)
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    <div class="key history">
        ${historyList}
        <strong class="label">History</strong>
    </div>
    `
})