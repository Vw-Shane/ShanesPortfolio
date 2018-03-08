// player stats
var health = 2;
canvasBackground = "#C9EEF3";

var keysDown = {};
// Create a new image object
var alien = new Image();
var fish = new Image();
var rat = new Image();
var table = new Image();
var jar = new Image();
var bubble = new Image();


// Set the image source and start loading
alien.src = 'images/404monster.png'
fish.src = 'images/404Lab.png'
rat.src = 'images/labRat.png'
table.src = 'images/table.png'
jar.src = 'images/jar.png'
bubble.src = 'images/bubble.png'



window.onload = function() {
    // preloader();

    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    //30 frame makes enemy move slower

    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
        // moveEverything();
    }, 1000 / framesPerSecond);
};

// function moveEverything() {
//     window.addEventListener('keydown', movePlayer, true);
   
//     // moveBrick();

// }


//all you need now is the function with the inputs 
function moveEnemy(rowL, rowR) {
    // console.log(firstRowRight.leftX);
    if (enimies.postionX + enimiesMove.postionX > rowR || enimies.postionX + enimiesMove.postionX < rowL) {
        enimiesMove.postionX = -enimiesMove.postionX;
    };
    enimies.postionX += enimiesMove.postionX;

}

// var brickChange = 3;

// function moveBrick() {

//     if (secondRowleft.leftX2 - 5 > 1200 ||
//         secondRowleft.leftX2 + 5 < 0) {
//         secondRowleft.leftX2 = -brickChange;
//     };
//     secondRowleft.leftX2 += brickChange;

// }



// this function gives the layout of the rectangels
function colorRect(leftX, topY, width, height, drawColor, tag) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

// this function gives the layout for circle shape
function colorCircle(centerX, centerY, radius, drawColor, tag) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}



//drawing code
function drawEverything() {
    //the following is the drawing of everything on screen
    colorRect(0, 0, canvas.width, canvas.height, canvasBackground, "Main");

    

    


    canvasContext.drawImage(bubble,75, 200,250,250);
    canvasContext.drawImage(alien,50, 400,150,150);
    canvasContext.drawImage(table,650, 275,450,250);
    canvasContext.drawImage(fish,850, 160,250,150);
    canvasContext.drawImage(rat,700, 220,75,75);
    canvasContext.drawImage(jar,680, 150,150,150);
    // canvasContext.drawImage(flagF,flagFF.leftX, flagFF.topY,flag.width,flag.height);

    // canvasContext.drawImage(playerSim, player.postionX - 50, player.postionY, player.height, player.width);
    // canvasContext.drawImage(playerFlip, player.postionXF - 50, player.postionYF, player.heightF, player.widthF);
    // canvasContext.drawImage(coin, coinPosition.X, coinPosition.Y, 50, 35);
    // canvasContext.drawImage(enemy, enimies.postionX - 50, enimies.postionY, 100, 75);
    // canvasContext.drawImage(enemyFip, enimies.postionX - 50, enemyFlip.postionY, enemyFlip.H, enemyFlip.W);


    // canvasContext.drawImage(hearts, heartpostion.X, heartpostion.Y, 25, 25);
    // canvasContext.drawImage(hearts, heartpostion.X2, heartpostion.Y2, 25, 25);
    // if (attack === 100) {
    //     canvasContext.drawImage(fireBall, fireBall.X, fireBall.Y, 25, 25);
    // }
}


   
