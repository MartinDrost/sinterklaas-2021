import { ReactNode } from "react";
import dahyunImg from "../resources/puzzles/dahyun.png";
import genipsImg from "../resources/puzzles/genips.png";
import jeroenImg from "../resources/puzzles/jeroen.png";
import kaisaImg from "../resources/puzzles/kaisa.png";
import otrimiImg from "../resources/puzzles/otrimi.png";
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
  {
    intro: (
      <p>
        Om het verdriet van een onjuist cadeau te besparen besloot{" "}
        <strong>Sint</strong> om eerst informatie te vergaren.
      </p>
    ),
    outro: (
      <p>
        Want je moet immers eerst iemand kennen om hem met een cadeau te
        verwennen.
      </p>
    ),
  },

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
        Maar natuurlijk, een printer! Daar hield Jeroen zich mee bezig van zomer
        tot winter.
      </p>
    ),
  },

  {
    intro: (
      <p>
        Maar <strong>Sint</strong>, zei de <strong>Piet</strong> die het boek
        beheert, weet u niet dat <strong>Jeroen</strong> een nieuw beroep
        beleerd?
      </p>
    ),
    puzzleImage: genipsImg,
    outro: (
      <p>
        Ah ja dat klopt daar wist ik van, hij schrijft nu code en maakt websites
        als een echte man!
      </p>
    ),
  },

  {
    intro: (
      <p>
        Maar van al dat werken krijg je een burn-out en uiteindelijk spijt. Wat
        doet die jongen in zijn vrije tijd?
      </p>
    ),
    puzzleImage: kaisaImg,
    outro: (
      <p>
        Spelletjes spelen doet <strong>Jeroen</strong> graag met zoveel mogelijk
        vrinden. Hij is dan ook elke avond op Discord te vinden.
      </p>
    ),
  },

  {
    intro: (
      <p>
        Computers zijn een leuk tijdsverdrijf maar het maakt je niet wereldwijs.
        Waar gaat <strong>Jeroen</strong> het liefst naartoe op reis?
      </p>
    ),
    puzzleImage: dahyunImg,
    outro: (
      <p>
        Korea! Menig me(n)s spaart hiervoor zijn vakantiedagen. Voor een reisje
        hoef je hem ook geen <strong>twee keer</strong> te vragen.
      </p>
    ),
  },

  {
    intro: (
      <p>
        De digitaal reizende <strong>Jeroen</strong> is nu goed in beeld, maar
        wat doet hij nog meer als hij zich verveelt?
      </p>
    ),
    puzzleImage: otrimiImg,
    outro: (
      <p>
        Voor een bordspelletje of kaarten is <strong>Jeroen</strong> altijd van
        de partij. En eerlijk, iedereen heeft hem er ook graag bij!
      </p>
    ),
  },

  {
    intro: (
      <p>
        Na al die feiten rest alleen nog één van de belangrijkste factoren. Hoe
        ziet hij er ook alweer uit tussen die oren?
      </p>
    ),
    puzzleImage: jeroenImg,
    outro: (
      <p>
        <strong>Sint</strong> knikte want dit moet wel voldoen. We hebben een
        goed genoeg beeld van <strong>Jeroen</strong>. Maak je cadeaus maar snel
        open voor jullie telefoons zijn leeggelopen.
      </p>
    ),
  },
];
