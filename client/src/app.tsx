import React, { useState } from "react";
import { ChooseRole } from "./components/choose-role";
import { PlayerScreen } from "./components/player-screen";
import { SpectatorScreen } from "./components/spectator-screen";
import "./domain/global.styles";

export const App = () => {
  // -1 for spectator, 0 - 3 for players
  const [player, setPlayer] = useState<number | null>(null);

  return (
    <div>
      {player === null && <ChooseRole onChange={setPlayer} />}
      {player !== null && player !== -1 && <PlayerScreen player={player} />}
      {player === -1 && <SpectatorScreen />}
    </div>
  );
};
