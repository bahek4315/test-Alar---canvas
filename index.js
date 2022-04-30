const canvas = document.getElementById("canvas");
const miniCanvas = document.getElementById("mini-canvas");

const ctx = canvas.getContext("2d");

//red star
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(97, 0);
ctx.lineTo(127, 63);
ctx.lineTo(196, 70);
ctx.lineTo(146, 118);
ctx.lineTo(158, 185);
ctx.lineTo(97, 153);
ctx.lineTo(37, 185);
ctx.lineTo(50, 118);
ctx.lineTo(1, 70);
ctx.lineTo(68, 61);
ctx.lineTo(97, 0);
ctx.closePath();
ctx.fill();

//blue star
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(497, 0);
ctx.lineTo(527, 63);
ctx.lineTo(596, 70);
ctx.lineTo(546, 118);
ctx.lineTo(558, 185);
ctx.lineTo(497, 153);
ctx.lineTo(437, 185);
ctx.lineTo(450, 118);
ctx.lineTo(401, 70);
ctx.lineTo(468, 61);
ctx.lineTo(497, 0);
ctx.closePath();
ctx.fill();

//green star
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(297, 200);
ctx.lineTo(327, 263);
ctx.lineTo(396, 270);
ctx.lineTo(346, 318);
ctx.lineTo(358, 385);
ctx.lineTo(297, 353);
ctx.lineTo(237, 385);
ctx.lineTo(250, 318);
ctx.lineTo(201, 270);
ctx.lineTo(268, 261);
ctx.lineTo(297, 200);
ctx.closePath();
ctx.fill();

//yellow star
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(97, 400);
ctx.lineTo(127, 463);
ctx.lineTo(196, 470);
ctx.lineTo(146, 518);
ctx.lineTo(158, 585);
ctx.lineTo(97, 553);
ctx.lineTo(37, 585);
ctx.lineTo(50, 518);
ctx.lineTo(1, 470);
ctx.lineTo(68, 461);
ctx.lineTo(97, 400);
ctx.closePath();
ctx.fill();

//black star
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(497, 400);
ctx.lineTo(527, 463);
ctx.lineTo(596, 470);
ctx.lineTo(546, 518);
ctx.lineTo(558, 585);
ctx.lineTo(497, 553);
ctx.lineTo(437, 585);
ctx.lineTo(450, 518);
ctx.lineTo(401, 470);
ctx.lineTo(468, 461);
ctx.lineTo(497, 400);
ctx.closePath();
ctx.fill();

canvas.addEventListener("click", (evt) => {
    const [red, green, blue, opacity] = ctx.getImageData(evt.offsetX, evt.offsetY, 1, 1).data;
    miniCanvas.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity / 255})`;
});
