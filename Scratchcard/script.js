const container = document.getElementById('scratch-container');
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');

const width = container.offsetWidth;
const height = container.offsetHeight;
canvas.width = width;
canvas.height = height;

ctx.fillStyle = '#ccc';
ctx.fillRect(0, 0, width, height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;

let isDrawing = false;

function getPosition(e) {
  let x, y;
  if (e.touches) {
    const touch = e.touches[0];
    x = touch.clientX - canvas.getBoundingClientRect().left;
    y = touch.clientY - canvas.getBoundingClientRect().top;
  } else {
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
  }
  return { x, y };
}

function startDrawing(e) {
  e.preventDefault();
  isDrawing = true;
  const pos = getPosition(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
  if (!isDrawing) return;
  const pos = getPosition(e);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function endDrawing(e) {
  e.preventDefault();
  isDrawing = false;
  ctx.closePath();
}

canvas.addEventListener('mousedown', startDrawing, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', endDrawing, false);
canvas.addEventListener('mouseleave', endDrawing, false);

canvas.addEventListener('touchstart', startDrawing, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', endDrawing, false);
canvas.addEventListener('touchcancel', endDrawing, false);

// FHFCTF{4c710n_15_u51n6_j5}
