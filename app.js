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

