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
    const touch = event.touches[0]; // Get the first touch point
    const gameAreaLeft = gameArea.getBoundingClientRect().left;
    const touchPositionX = touch.clientX - gameAreaLeft;
    const paddleLeft = touchPositionX - paddleWidth / 2;

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

    // Check collision with paddle
    const paddleTop = gameArea.offsetHeight - paddle.offsetHeight;
    const paddleBottom = gameArea.offsetHeight;
    const paddleLeft = paddle.offsetLeft;
    const paddleRight = paddle.offsetLeft + paddleWidth;

    if (
      ballTop + ballWidth >= paddleTop &&
      ballTop <= paddleBottom &&
      ballLeft + ballWidth >= paddleLeft &&
      ballLeft <= paddleRight
    ) {
      // Randomize bounce angle
      ballSpeedX = Math.random() * 2 - 1; // Random number between -1 and 1
      ballSpeedY = -ballSpeedY; // Reverse the vertical direction

      // Adjust the ball's position to prevent it from going through the paddle
      ballTop = paddleTop - ballWidth;
    }

    // Check if ball hits the bottom wall
    if (ballTop >= gameArea.offsetHeight - ballWidth) {
      alert("Game Over!");
      clearInterval(gameInterval);
    }

    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
  }

  gameArea.addEventListener("touchmove", movePaddle);

  const gameInterval = setInterval(moveBall, 10);
});
