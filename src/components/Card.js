import "../style/card.css";
import { Button } from "./Button";
import LotteryQuestions from "./LotteryQuestions";
const Card = () => {
  return (
    <div className="card">
      <h1> WYLOSOWANE PYTANIE : </h1>
      <LotteryQuestions />
      <Button />
    </div>
  );
};
export default Card;
