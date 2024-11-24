import { useState } from "react";
export default function Player({
  name,
  symbol,
  isactivestate,
  Onsetchangename,
}) {
  const [n, sn] = useState(name);
  function updatevalue(event) {
    sn(event.target.value);
  }
  const [s, us] = useState(false);

  function handleclick() {
    us((e) => !e);
    if (s) {
      Onsetchangename(symbol, n);
    }
  }

  let p = <span className="player-name">{n}</span>;
  if (s) {
    p = <input type="text" required value={n} onChange={updatevalue}></input>;
  }
  //console.log("Player:", name, "isactivestate:", isactivestate);

  return (
    <li className={isactivestate ? "active" : undefined}>
      <span className="player">
        {p}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleclick}>{s ? "save" : "Edit"} </button>
    </li>
  );
}
