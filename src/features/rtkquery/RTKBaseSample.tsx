import React, { useState } from "react";
import Pokemon from "./Pokemon";

const pokemon = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

export default function RTKBaseSample() {
  const [pollingInterval, setPollingInterval] = useState(0);

  return (
    <div>
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {pokemon.map((poke, index) => (
          <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
        ))}
      </div>
    </div>
  );
}
