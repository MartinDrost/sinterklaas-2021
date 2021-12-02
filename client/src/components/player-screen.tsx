import { FC, useEffect } from "react";
import { style } from "typestyle";
import { colors } from "../domain/colors";
import { socket } from "../domain/socket";
import rotateSvg from "../resources/screen-rotation.svg";

interface IProps {
  player: number;
}

let lastEmission = Date.now();

export const PlayerScreen: FC<IProps> = (props) => {
  useEffect(() => {
    const sendRotation = (orientation: DeviceOrientationEvent) => {
      // only emit at 30fps
      if (Date.now() - lastEmission > 1000 / 30) {
        socket.emit("rotate", {
          x: orientation.alpha,
          y: orientation.beta,
          z: orientation.gamma,
        });
        lastEmission = Date.now();
      }
    };

    window.addEventListener("deviceorientation", sendRotation);

    return () => {
      socket.off("rotate");
      window.removeEventListener("deviceorientation", sendRotation);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: colors.players[props.player] }}
    >
      <img
        src={rotateSvg}
        alt="Rotate your device"
        className={styles.rotateImg}
      />
    </div>
  );
};

const styles = {
  container: style({
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),

  rotateImg: style({
    width: "10vh",
  }),
};
