const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let currIdx = 0

let interval = setInterval(run, 2000)

function run(){
    currIdx++
    changeImage()
}

function changeImage(){
    if (currIdx > img.length - 1){
        currIdx = 0
    }
    else if (currIdx < 0){
        currIdx = img.length - 1
    }

    imgs.style.transform = `translateX(${-100 * currIdx}%)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

btnLeft.addEventListener('click', () => {
    currIdx--
    changeImage()
    resetInterval()
})

btnRight.addEventListener('click', () => {
    currIdx++
    changeImage()
    resetInterval()
})