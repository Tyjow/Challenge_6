var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#000";
ctx.beginPath();
ctx.arc(90,90,15,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(130,90,15,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(170,90,15,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(210,90,15,0,2*Math.PI);
ctx.fill();