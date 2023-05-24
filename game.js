document.addEventListener("DOMContentLoaded", () => {
  const paddle = document.getElementById("paddle");
  const ball = document.getElementById("ball");
  const gameArea = document.getElementById("gameArea");
  
  let gameAreaWidth = gameArea.offsetWidth;
  let paddleWidth = paddle.offsetWidth;
  let ballWidth = ball.offsetWidth;
  
  let ballLeft = 190;
  let ballTop = 100;
  let ballSpeedX = 2;
  let ballSpeedY = 2;
  
  function movePaddle(event) {
    const gameAreaLeft = gameArea.getBoundingClientRect().left;
    const mousePositionX = event.clientX - gameAreaLeft;
    const paddleLeft = mousePositionX - paddleWidth / 2;
    
    if (paddleLeft >= 0 && paddleLeft <= gameAreaWidth - paddleWidth) {
      paddle.style.left = paddleLeft + "px";
    }
  }
  
  function moveBall() {
    ballLeft += ballSpeedX;
    ballTop += ballSpeedY;
    
    if (ballLeft <= 0 || ballLeft >= gameAreaWidth - ballWidth) {
      ballSpeedX = -ballSpeedX;
    }
    
    if (ballTop <= 0 || ballTop >= gameArea.offsetHeight - ballWidth) {
      ballSpeedY = -ballSpeedY;
    }
    
    if (ballTop >= gameArea.offsetHeight - ballWidth) {
      if (
        ballLeft >= paddle.offsetLeft &&
        ballLeft <= paddle.offsetLeft + paddleWidth
      ) {
        ballSpeedY = -ballSpeedY;
      } else {
        alert("Game Over!");
        clearInterval(gameInterval);
      }
    }
    
    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
  }
  
  gameArea.addEventListener("mousemove", movePaddle);
  
  const gameInterval = setInterval(moveBall, 10);
});
