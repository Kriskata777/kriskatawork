const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 200; // Number of stars

function createStar() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2 + 1; // Random size
    const speed = Math.random() * 0.5 + 0.1; // Random speed
    stars.push({ x, y, radius, speed });
}

for (let i = 0; i < numStars; i++) {
    createStar();
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White stars with some transparency

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, true);
        ctx.fill();
    });
}

function animate() {
    stars.forEach(star => {
        star.x += star.speed; // Move star to the right
        if (star.x > canvas.width) {
            star.x = 0; // Reset star to the left if it goes off the right
            star.y = Math.random() * canvas.height; // Randomize y position
        }
    });

    drawStars();
    requestAnimationFrame(animate);
}


animate();
