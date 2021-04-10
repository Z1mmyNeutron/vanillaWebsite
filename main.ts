function main() {
  //get gpu canvas enabled

  let chrissieCanvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("chrissieCanvas")
  );
  let context = chrissieCanvas.getContext("2d");
  let positionX = 10;
  let positionY = 80;
  let directionX = 5;
  let directionY = 5;
  let chrissieWorld = "C";
  context.font = "50px Monospace";
  let widthOfText = context.measureText(chrissieWorld).width;
  
  //for keyboard 
  window.addEventListener("keydown", (event) => {
    console.log(event);
  });
  
  let chrissieAnimation = true;
  //   let kirkAnimation = false;
  let verbosity = 0;

  function chrissieAnimationCallback() {
    context.clearRect(0, 0, chrissieCanvas.width, chrissieCanvas.height);
    // context.fillText(chrissieWorld, positionX, positionY);
    // positionX = positionX + directionX;
    // positionY = positionY + directionY;

    // if (positionX > chrissieCanvas.width - widthOfText || positionX < 0) {
    //   directionX = directionX * -1;
    // }
    // if (verbosity > 0) {
    //   console.log("positionY" + positionY);
    //   console.log("chrissieCANVAS HEight" + chrissieCanvas.height);
    // }
    // if (positionY > chrissieCanvas.height || positionY < 0) {
    //   directionY = directionY * -1;
    //   console.log("the direction hitting the wall + POWIION Y" + positionY);
    // }

    //figure out an if statement to clear them back and forth 
    //for(let i = 0; i < 7; i++){
      window.clear(context, chrissieCanvas);
      window.drawGoose(context);
     // window.drawWingFlap(context);
      //window.rotateGoose(context);
    //}
  }

  function animate(timestamp) {
    if (chrissieAnimation === true) {
      chrissieAnimationCallback();
    }

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
}
function clear(context, chrissieCanvas){

  context.clearRect(0 ,0, chrissieCanvas.width, chrissieCanvas.height)
}

function drawGoose(context){
  drawCircle(context, 245, 370, 20);
  //neck
  drawLine(context, 260, 470, 245, 390);
  drawLine(context, 289, 480, 255, 389);
  //beak
  drawTriangle(context, 225, 370, 200, 380, 230, 382);
  //body
  drawCircle(context, 300, 500, 50);
  //wings
  drawHalfCircle(context, 315, 480, 45);

}

function drawWingFlap(context){
  drawCircle(context, 245, 370, 20);
  //neck
  drawLine(context, 260, 470, 245, 390);
  drawLine(context, 289, 480, 255, 389);
  //beak
  drawTriangle(context, 225, 370, 200, 380, 230, 382);
  //body
  drawCircle(context, 300, 500, 50);
  //wings
  drawHalfCircle(context, 215, 480, 45);
}

function eraseWingFlap(context){
  drawCircle(context, 245, 370, 20);
  //neck
  drawLine(context, 260, 470, 245, 390);
  drawLine(context, 289, 480, 255, 389);
  //beak
  drawTriangle(context, 225, 370, 200, 380, 230, 382);
  //body
  drawCircle(context, 300, 500, 50);
  //wings
  drawHalfCircle(context, 315, 480, 45);
}
//needs work currently goes way too fast
function rotateGoose(context){
  drawGoose(context);
  context.rotate(15 * -Math.PI/120);
}

//can start code here
//full circle if you want half circle make it 1 * math.pi
//functions
function drawHalfCircle(context, x : number, y : number, radius : number,){
  context.beginPath();
  context.arc(x, y, radius, 0, 1 * Math.PI);
  context.stroke();
}

function drawCircle(context, x : number, y : number, radius : number,){
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
}
function drawLine(context, x : number, y : number, x2 : number, y2 : number){
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x2, y2);
  context.stroke();

}

function drawTriangle(context, x : number, y : number, x2 : number, y2 : number, x3 : number, y3 : number){
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.stroke();
  context.closePath();
  

}

function drawOutline(context, lineWidthOne : number, strokeStyleOne : String){
  context.lineWidth(lineWidthOne);
  context.strokeStyle(strokeStyleOne);
  context.stroke();

}
function fillColors(context, color : String){
  context.fillStyle(color);
  context.fill();

}


function generateDimensionedTokens(context, str) {
  let tokens = [];

  for (let index = 0; index < str.length; index = index + 1) {
    let character = str[index] + "";
    let textLength = context.measureText(character).width;

    tokens.push({
      character: character,
      size: textLength,
    });
  }

  return tokens;
}
function animate(timestamp) {
  console.log("your animate function worked!" + timestamp);
} window.requestAnimationFrame(animate);

main();
