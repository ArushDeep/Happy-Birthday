var form1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  form1 = new Greeting();
  form1.show();

  console.log("width = " + windowWidth);
  console.log("height = " + windowHeight);
}

function draw() {
  background(100);
}
