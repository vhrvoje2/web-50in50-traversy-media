const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes() 

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    const triggerTop = window.innerHeight / 20

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop <= triggerBottom && boxTop >= triggerTop){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    });
}