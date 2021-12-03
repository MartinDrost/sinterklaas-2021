import { ReactNode } from "react";
import printerImg from "../resources/puzzles/printer.png";

export const scenes: {
  intro: ReactNode;
  puzzleImage?: string;
  outro: ReactNode;
}[] = [
  {
    intro: (
      <p>
        <strong>Sint</strong> en <strong>Piet</strong> zaten te denken wat ze{" "}
        <strong>Jeroen</strong> zouden schenken...
      </p>
    ),
    outro: (
      <p>
        Veel wensen stonden op zijn lijst maar de{" "}
        <strong>Accountant Piet</strong> had een budget geëist.
      </p>
    ),
  },

  // add more gedicht

  {
    intro: (
      <p>
        Het eerste wat de <strong>Sint</strong> zich bedacht had te maken met{" "}
        <strong>Jeroen</strong> zijn eerdere ambacht.
      </p>
    ),
    puzzleImage: printerImg,
    outro: (
      <p>
        Maar natuurlijk een printer! Daar hield Jeroen zich mee bezig van zomer
        tot winter.
      </p>
    ),
  },
];
