import React, { useState } from "react";
//const Initialgameboard = [
 // [null, null, null],
 // [null, null, null],
//  [null, null, null],
//];

export default function GameBoard({ onsetactiveplayer, board }) {
 // const gameboard = Initialgameboard;
  //for (const turn of turns) {
    //const { square, player } = turn;
    //const { row, col } = square;
   // gameboard[row][col] = player;
   //when we used this we used to map gamebord. map in ol list
  

  // const [v, cs] = useState(Initialgameboard);
  // function handlerclick(rowindex, colindex) {
  //  cs((prevvalue) => {
  //   const updatev = [...prevvalue.map((innerarray) => [...innerarray])];
  //   updatev[rowindex][colindex] = activeplayersymbol;
  //  return updatev;
  // });
  // onsetactiveplayer();
  // }

  // return (
  //  <ol id="game-board">
  // {v.map((row, rowindex) => (
  //   <li key={rowindex}>
  //   <ol>
  // {row.map((col, colindex) => (
  //   <li key={colindex}>
  //    <button onClick={() => handlerclick(rowindex, colindex)}>
  //   {col}
  //  </button>
  // </li>
  //))}
  //   </ol>
  // </li>
  //))}
  //</ol>
  // );
  //}

  return (
    <ol id="game-board">
      {board.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((col, colindex) => (
              <li key={colindex}>
                <button
                  onClick={() => onsetactiveplayer(rowindex, colindex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
