import "../style/card.css";
import { Button } from "./Button";
import LotteryTarrots from "./LotteryTarrots";
const Card = () => {
  return (
    <div className="card">
      <h1> Cym jest Tarot?</h1>
      <p>Zacznijmy od podstaw. Tarot to 78 kart z konkretnymi rysunkami. Nie są to przypadkowe rysunki – na każdym znajdziesz pewne charakterystyczne dla danej karty symbole i odwołania. 78 kart podzielone jest na: Wielkie Arkana (22 karty) oraz Małe Arkana (56 kart). Karty uporządkowane są w swoisty system, skonstruowany w oparciu o:
Symbole, które funkcjonują w naszej zbiorowej nieświadomości przez obecność kultury, mitów, obrazów znaczących dla kolektywnej egzystencji.
Astrologię, czyli znaczenia archetypów znaków zodiaku i planet. Astrologia jest złożoną nauką, która zawiera w sobie zarys konstrukcji psychicznej człowieka oraz wpływu danego momentu na niego.
Numerologię, czyli potężną naukę o znaczeniu liczb w odniesieniu do osobowości i rzeczywistości.
Kabałę, czyli nurt mistyczno-filozoficzny.
Kolory i ich znaczenie.
4 Żywioły, czyli jakości konstrukcji psychiki i rzeczywistości.</p>
      <h1> CO PRZYNIESIE CI PRZYSZŁOŚĆ?</h1>
      <LotteryTarrots />
      <Button />
    </div>
  );
};
export default Card;
