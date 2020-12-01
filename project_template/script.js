const panels = document.querySelectorAll('.panel')
var button = document.querySelector('.mode')
button.mode = "light"

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}

button.addEventListener('click', () => {
    if (button.mode == "light"){
        button.mode = "dark";
        button.textContent = "Light mode"
        document.body.style.backgroundColor = "#212121";
        button.classList.remove('button--light')
        button.classList.add('button--dark')
    } 
    else {
        button.mode = "light"
        button.textContent = "Dark mode"
        document.body.style.backgroundColor = "#e6e6e6";
        button.classList.remove('button--dark')
        button.classList.add('button--light')
    }
})