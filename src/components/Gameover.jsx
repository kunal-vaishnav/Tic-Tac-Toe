export default function Gameover({ winner, Onrestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner}Won</p>}
      {!winner && <p>Its a Draw</p>}
      <p>
        <button onClick={Onrestart}>Rematch</button>
      </p>
    </div>
  );
}
