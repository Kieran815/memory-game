import React from 'react';

function GameOver(props) {
  console.log('Game Over');
  return (
    <div className="card gameover" style={{width: '80vw',}}>
      <h1 style={{ textAlign: 'center' }}>Game Over</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span>Your Score: {props.currentScore}</span>
        <span>High Score: {props.highScore}</span>
      </div>
      <button onClick={() => props.restartGame()}>Restart?</button>
    </div>
  );
}

export default GameOver;