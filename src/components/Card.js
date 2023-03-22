import "../style/card.css";
import { Button } from "./Button";
import LotteryTarrots from "./LotteryTarrots";
const Card = () => {
  return (
    <div className="card">
      <h1> CO PRZYNIESIE CI PRZYSZŁOŚĆ?</h1>
      <LotteryTarrots />
      <Button />
    </div>
  );
};
export default Card;
