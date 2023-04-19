import "../style/card.css";
import { Button } from "./Button";
import LotteryTarrots from "./LotteryTarrots";
const Card = () => {
  return (
    <div className="card">
      <h1> Cym jest Tarot?</h1>
      <p>Tarot, nazywany również tarokiem, to talia 78 kart służących do wróżenia oraz do medytacji. Tarot składa się z 22 kart Wielkich Arkanów oraz 56 kart Małych Arkanów. Karty tarota mogą również służyć do gry – wówczas używa się talii składających się z od 40 do 78 kart.</p>
      <h1> CO PRZYNIESIE CI PRZYSZŁOŚĆ?</h1>
      <LotteryTarrots />
      <Button />
    </div>
  );
};
export default Card;
