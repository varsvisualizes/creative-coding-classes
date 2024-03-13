let serial;
let latestData = "waiting for data";

/* EDIT BELOW */

let x = 100;
let y = 100;

/* EDIT ABOVE */

/* PLEASE DO NOT TOUCH BELOW */

function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('COM3');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}

/* PLEASE DO NOT TOUCH ABOVE */

/* okay now you can have fun in the draw function! */

function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
  
 ellipse(x, y, 50);
  
 if(latestData=="left") {
   x -= 10;
 } else if(latestData=="right") {
   x += 10;  
 } else if(latestData=="up") {
   y -= 10;
 } else if(latestData=="down") {
   y += 10;
 }
  
  if(x < 0) {
    x = width;
  } else if(x > width) {
    x = 0;
  }
  
  if(y < 0) {
    y = height;
  } else if(y > height) {
    y = 0;
  }

}