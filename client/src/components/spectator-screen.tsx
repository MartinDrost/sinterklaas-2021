import { FC } from "react";
import { style } from "typestyle";

interface IProps {}

export const SpectatorScreen: FC<IProps> = (props) => {
  return <div className={styles.container}>Welkom Sinterklaasje</div>;
};

const styles = {
  container: style({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  }),
};
