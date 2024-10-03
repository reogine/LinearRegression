var data = []

var w = 1;
var b = 0;

function setup() {
  createCanvas(400, 400);
  background(52);
}

function linearRegression() {
  var xsum = 0;
  var ysum = 0;
  var num = 0;
  var dem = 0;
  for (var i = 0; i < data.length; i++){
    xsum += data[i].x
    ysum += data[i].y
  }
  var xmean = xsum / data.length;
  var ymean = ysum / data.length;
  for(var i = 0; i < data.length; i++){
    var x = data[i].x;
    var y = data[i].y;

    num += (x - xmean) * (y - ymean);
    dem += (x - xmean) * (x - xmean);
  }

  w = num / dem;
  b = ymean - w * xmean;
}

function mousePressed(){
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);

  var pt = createVector(x, y);
  data.push(pt);
}

function drawLine(){
  var x1 = 0;
  var y1 =  w * x1 + b;
  var x2 = 1;
  var y2 = w * x2 + b;

  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);
  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  
  stroke(255, 0, 255);
  line(x1, y1, x2, y2);
}

function draw(){
  background(52)
  // console.log("herer");
  for (var i = 0; i < data.length; i++){
    var x = map(data[i].x, 0, 1, 0, width);
    var y = map(data[i].y, 0, 1, height, 0);
    fill(255);
    stroke(255);
    ellipse(x, y, 8, 8);
  }
  if (data.length >  1){
    linearRegression();    
    drawLine();
  }
}