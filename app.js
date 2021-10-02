// Create variables to access char and obstacle
var char = document.getElementById('char');
var obstacle = document.getElementById('obstacle');

// Create function for jump
function jump(){
    if (char.classList != 'charJump') {
        char.classList.add("charJump");
    }
    setTimeout(function(){
        char.classList.remove('charJump');
    }, 500)
}

// Check if I have hit obstacle
var obstacleHit = setInterval(() => {
    var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft<20 && obstacleLeft>0 && charTop >= 130) {
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('Game Over');
    }
}, 10);