document.querySelector('.menu').addEventListener('click', menuBar)
document.querySelector('.clear').addEventListener('click', clearBar)


function menuBar(){
    document.querySelector('.nav-menu').style.left = 0
    document.querySelector('.menu').style.opacity = 0
    document.querySelector('.clear').style.opacity = 1
    document.querySelector('.clear').style.right = '1px'

}

function clearBar(){
    document.querySelector('.nav-menu').style.left = '-100%'
    document.querySelector('.clear').style.opacity = 0
    document.querySelector('.menu').style.opacity = 1
    document.querySelector('.clear').style.right = '-20px'

}