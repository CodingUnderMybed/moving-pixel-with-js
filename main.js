const player = document.getElementById('player')
const playerPositionX = getComputedStyle(player).left
const playerPositionY = getComputedStyle(player).top
let x = '225px'
let y = '225px'


document.addEventListener('keydown', function controle(e){

if (parseInt(x) >= 475 || parseInt(y) >= 475 || parseInt(x) <= 0 || parseInt(y) <= 0 ){
    //Here resets the player in the default position and a random color for the pixel is choosen
    player.style.top = '225px'
    player.style.left = '225px'
    x = '225px'
    y = '225px'
    colors = ['red', 'green', 'yellow', 'pink', 'purple']
    randomM = Math.floor(Math.random() * 5)
    pickedColor = colors[randomM]
    console.log(pickedColor, randomM)
    player.style.background = pickedColor
    

}
if (e.code === 'ArrowDown'){
    console.clear()

    console.log("moving player Down")
    

    yInt = parseInt(y)

    yInt += 25

    yStg = yInt + 'px'
    y = yStg
    console.log("moved player down")
    console.log(x, y)

    return player.style.top = yStg
}
if (e.code === 'ArrowUp'){
    console.clear()

    console.log("moving player Up")
    

    yInt = parseInt(y)

    yInt -= 25

    yStg = yInt + 'px'
    y = yStg
    console.log("moved player Up")
    console.log(x, y)

    return player.style.top = yStg


   
    

}
if (e.code === 'ArrowLeft'){
    console.clear()

    console.log("moving player Left")
    

    xInt = parseInt(x)

    xInt -= 25

    xStg = xInt + 'px'
    x = xStg
    console.log("moved player Left")
    console.log(x, y)

    return player.style.left = xStg

}
if (e.code === 'ArrowRight'){
    console.clear()

    console.log("moving player Right")
    

    xInt = parseInt(x)

    xInt += 25

    xStg = xInt + 'px'
    x = xStg
    console.log("moved player Right")
    console.log(x, y)

    return player.style.left = xStg
    
    



}

})


