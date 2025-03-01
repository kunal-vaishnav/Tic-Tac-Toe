import gamelogo from "../assets/game-logo.png";
import React from "react";
export default function Header() {
  return (
    <>
      <header>
        <img src={gamelogo} alt="hand drawn-tic-tac-toe" />
        <h1>Tic-Tac-Toe</h1>
      </header>
    </>
  );
}
