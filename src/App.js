import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { allcombination } from "./components/Data.jsx";
import Gameover from "./components/Gameover.jsx";
const Initialgameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveplayer(gameturns) {
  let currentplayer = "X";
  if (gameturns.length > 0 && gameturns[0].player === "X") {
    currentplayer = "O";
  }
  return currentplayer;
}
function App() {
  const [playersname, setplayesrname] = useState({
    X: "player1",
    O: "player2",
  });
  const [gameturns, setgameturns] = useState([]);
  const activeplayer = deriveplayer(gameturns);
  const gameboard = [...Initialgameboard.map((array) => [...array])];
  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  let playerwin;
  for (const combination of allcombination) {
    firstsymbol = gameboard[combination[0].row][combination[0].col];
    secondsymbol = gameboard[combination[1].row][combination[1].col];
    thirdsymbol = gameboard[combination[2].row][combination[2].col];
    if (
      firstsymbol &&
      firstsymbol === secondsymbol &&
      firstsymbol === thirdsymbol
    ) {
      playerwin = playersname[firstsymbol];
    }
  }
  const draw = gameturns.length === 9 && !playerwin;

  function isclicked(rowindex, colindex) {
    setgameturns((prevturns) => {
      const currentplayer = deriveplayer(prevturns);
      //   if (prevturns.length > 0 && prevturns[0].player === "X") {
      //   currentplayer = "O";
      //  }
      const updatedturns = [
        { square: { row: rowindex, col: colindex }, player: currentplayer },
        ...prevturns,
      ];
      return updatedturns;
    });
  }
  function restart() {
    setgameturns([]);
  }
  function handlenamechange(symbol, newname) {
    setplayesrname((prevplayername) => {
      return {
        ...prevplayername,
        [symbol]: newname,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="player1"
            symbol="X"
            isactivestate={activeplayer === "X"}
            Onsetchangename={handlenamechange}
          />
          <Player
            name="player2"
            symbol="O"
            isactivestate={activeplayer === "O"}
            Onsetchangename={handlenamechange}
          />
        </ol>
        {(playerwin || draw) && (
          <Gameover winner={playerwin} Onrestart={restart} />
        )}
        <GameBoard onsetactiveplayer={isclicked} board={gameboard} />
      </div>

      <Log turns={gameturns} />
    </main>
  );
}

export default App;
