const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//heart
ctx.strokeStyle = "red";
ctx.lineWidth = 80;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(150,50);
ctx.lineTo(100,100);
ctx.lineTo(50,50);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "red";
ctx.lineWidth = 80;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(350,350);
ctx.lineTo(300,300);
ctx.stroke();
ctx.closePath();

//spade
ctx.strokeStyle = "black";
ctx.lineWidth = 80;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(550,100);
ctx.lineTo(500,60);
ctx.lineTo(450,100);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineWidth = 80;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(100,360);
ctx.lineTo(150,400);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineJoin = "round";
ctx.lineWidth = 30;
ctx.beginPath();
ctx.moveTo(520,180);
ctx.lineTo(500,120);
ctx.lineTo(480,180);
ctx.lineTo(520,180);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineWidth = 30;
ctx.beginPath();
ctx.moveTo(120,480);
ctx.lineTo(100,420);
ctx.lineTo(80,480);
ctx.lineTo(120,480);
ctx.stroke();
ctx.closePath();

//club
ctx.strokeStyle = "black";
ctx.lineWidth = 90;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(650,300);
ctx.lineTo(650,300);
ctx.moveTo(750,300);
ctx.lineTo(750,300);
ctx.moveTo(700,250);
ctx.lineTo(700,250);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineWidth = 90;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(350,600);
ctx.lineTo(350,600);
ctx.moveTo(450,600);
ctx.lineTo(450,600);
ctx.moveTo(400,550);
ctx.lineTo(400,550);
ctx.stroke();   
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineJoin = "round";
ctx.lineWidth = 30;
ctx.beginPath();
ctx.moveTo(420,680);
ctx.lineTo(400,606);
ctx.lineTo(380,680);
ctx.lineTo(420,680);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "black";
ctx.lineJoin = "round";
ctx.lineWidth = 30;
ctx.beginPath();
ctx.moveTo(720,380);
ctx.lineTo(700,306);
ctx.lineTo(680,380);
ctx.lineTo(720,380);
ctx.stroke();
ctx.closePath();

//diamond
 var angleInRadians = 45 * Math.PI / 180;
 ctx.rotate(angleInRadians);
 ctx.fillStyle = "red";
 ctx.fillRect(250,-160,100,100);
 ctx.closePath();

 ctx.fillRect(640, -120,100,100);
 ctx.closePath();
 

 
 