const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let dy = 1;
let dx = 1;
let x = 100;
let y = 100;

function animateBall(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2, Math.PI)
    x += dx;
    y += dy;
    requestAnimationFrame(animateBall);
}

animateBall();