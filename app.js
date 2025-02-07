const circle = document.getElementById('circle');
const line = document.getElementById('line');
const startButton = document.getElementById('startButton');
const bounceCountElement = document.getElementById('bounceCount');
const speedSlider = document.getElementById('speedSlider');
const linePositionSlider = document.getElementById('linePosition');

        
let pos = 0; 
let direction = 1; 
let speed = 10; 
let bounceCount = 0; 
let animationInterval = null; 

        
function moveCircle() {
    pos += direction * speed;
    circle.style.left = pos + 'px';

           
    if (pos >= window.innerWidth - 70 || pos <= 0) {
        direction *= -1;
        bounceCount++;
        updateCircleColor();
        updateBounceCount();
    }

            
    const lineLeft = parseInt(line.style.left);
    if (pos + 50 >= lineLeft && pos <= lineLeft + 5) {
        direction *= -1;
        bounceCount++;
        updateCircleColor();
        updateBounceCount();
    }
}

        
function updateCircleColor() {
    const colors = ['orange', 'red', 'yellow', 'green', 'blue', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
}

        
function updateBounceCount() {
    bounceCountElement.textContent = bounceCount;
}

        
startButton.addEventListener('click', () => {
    if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
        startButton.textContent = 'Запустить';
    } else {
        animationInterval = setInterval(moveCircle, 50);
        startButton.textContent = 'Остановить';
    }
});

        
speedSlider.addEventListener('input', () => {
    speed = parseInt(speedSlider.value);
});

        
linePositionSlider.addEventListener('input', () => {
    line.style.left = linePositionSlider.value + 'px';
});