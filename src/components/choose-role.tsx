import { FC } from "react";
import { style } from "typestyle";
import { colors } from "../domain/colors";
import { socket } from "../domain/socket";

interface IProps {
  onChange: (role: number) => void;
}

const names = ["Hoge Hoogte Piet", "Wegwijs Piet", "Coole Piet", "Muziek Piet"];

export const ChooseRole: FC<IProps> = (props) => {
  const chooseRole = (role: number) => {
    if (role !== -1) {
      socket.emit("join", role);
    }

    props.onChange(role);
  };

  return (
    <div className={styles.container}>
      {colors.players.map((color, i) => (
        <div
          key={i}
          className={styles.role}
          style={{ backgroundColor: color }}
          onClick={() => chooseRole(i)}
        >
          {names[i]}
        </div>
      ))}

      <div
        className={styles.role}
        style={{ backgroundColor: colors.spectator }}
        onClick={() => chooseRole(-1)}
      >
        Sinterklaas
      </div>
    </div>
  );
};

const styles = {
  container: style({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  }),

  role: style({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }),
};
