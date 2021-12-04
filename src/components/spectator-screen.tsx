import { FC, useEffect, useState } from "react";
import { style } from "typestyle";
import { scenes } from "../domain/scenes";
import { socket } from "../domain/socket";
import backgroundImg from "../resources/gift-pattern.png";

interface ICornerState {
  axis: number;
  flipped: boolean;
}

const cornerBackgroundPositions = [
  "top left",
  "top right",
  "bottom left",
  "bottom right",
];

export const SpectatorScreen: FC = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneState, setSceneState] = useState<"intro" | "puzzle" | "outro">(
    "intro"
  );

  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [cornerStartAxis, setCornerStartAxis] = useState([0, 0, 0, 0]);
  const [cornerStates, setCornerStates] = useState<ICornerState[]>(
    Array(4)
      .fill(0)
      .map(() => ({ axis: 0, flipped: false }))
  );
  const scene = scenes[sceneIndex];

  useEffect(() => {
    const handleRotation = (data: {
      player: number;
      rotation: { alpha: number; beta: number; gamma: number };
    }) => {
      setCornerStates((_states) => {
        _states[data.player].axis = data.rotation.alpha + 180;
        return [..._states];
      });
    };

    const handleFlip = (data: { player: number }) => {
      console.log(data);
      setCornerStates((states) =>
        states.map((state, i) => ({
          ...state,
          flipped: data.player === i ? !states[i].flipped : states[i].flipped,
        }))
      );
    };

    socket.on("rotate", handleRotation);
    socket.on("flip", handleFlip);

    return () => {
      socket.off("rotate", handleRotation);
      socket.off("flip", handleFlip);
    };
  }, []);

  useEffect(() => {
    setSceneState("intro");
    setIsPuzzleSolved(false);
    const _cornerStartAxis = [0, 0, 0, 0];
    const _cornerStates: ICornerState[] = Array(4);
    for (let i = 0; i < 4; i++) {
      _cornerStartAxis[i] = Math.round(Math.random() * 360);
      _cornerStates[i] = { axis: 0, flipped: !!Math.round(Math.random()) };
    }
    setCornerStartAxis(_cornerStartAxis);
    setCornerStates(_cornerStates);
  }, [sceneIndex]);

  useEffect(() => {
    setIsPuzzleSolved(
      isPuzzleSolved ||
        cornerStates.every(
          (state, i) =>
            !state.flipped && (state.axis + cornerStartAxis[i] + 15) % 360 <= 30
        )
    );
  }, [cornerStartAxis, cornerStates, isPuzzleSolved]);

  return (
    <div className={styles.container}>
      {sceneState === "intro" && (
        <div>
          <div>{scene.intro}</div>
          <div
            className={styles.link}
            onClick={() =>
              setSceneState(scene.puzzleImage ? "puzzle" : "outro")
            }
          >
            Ga verder
          </div>
        </div>
      )}

      {sceneState === "puzzle" && (
        <div className={styles.puzzle}>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                className={styles.corner}
                key={i}
                style={{
                  transform: `scaleX(${
                    (isPuzzleSolved ? 1 : 0.7) *
                    (!isPuzzleSolved && cornerStates[i].flipped ? -1 : 1)
                  }) scaleY(${isPuzzleSolved ? 1 : 0.7})`,
                }}
              >
                <div
                  className={styles.cornerImage}
                  style={{
                    backgroundImage: `url(${scene.puzzleImage})`,
                    backgroundPosition: cornerBackgroundPositions[i],
                    filter: isPuzzleSolved ? "contrast(1)" : "contrast(0)",
                    transform: `rotate(${
                      isPuzzleSolved
                        ? 0
                        : cornerStates[i].axis + cornerStartAxis[i]
                    }deg)`,
                  }}
                />
              </div>
            ))}

          {isPuzzleSolved && (
            <div className={styles.link} onClick={() => setSceneState("outro")}>
              Ga verder
            </div>
          )}
        </div>
      )}

      {sceneState === "outro" && (
        <div>
          <div>{scene.outro}</div>

          {scenes.length > sceneIndex + 1 && (
            <div
              className={styles.link}
              onClick={() => setSceneIndex(sceneIndex + 1)}
            >
              Ga verder
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: style({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${backgroundImg})`,
    textAlign: "center",
  }),

  link: style({
    marginTop: "1rem",
    cursor: "pointer",
    color: "#0984e3",
    textDecoration: "underline",
  }),

  puzzle: style({
    width: 720,
    height: 720,
  }),
  corner: style({
    width: 360,
    height: 360,
    float: "left",
    transition: ".3s transform",
  }),

  cornerImage: style({
    width: 360,
    height: 360,
    transition: "2s filter",
  }),
};
