import "../style/card.css";
import { tarrots } from "./TarrotsCards";
// import { Button } from "./Button";

const Card = () => {

  return (
    <div className="card">
      <h1> Cym jest Tarot?</h1>
      <p>Tarot, nazywany również tarokiem, to talia 78 kart służących do wróżenia oraz do medytacji. Tarot składa się z 22 kart Wielkich Arkanów oraz 56 kart Małych Arkanów. Karty tarota mogą również służyć do gry – wówczas używa się talii składających się z od 40 do 78 kart.</p>
      <h1> CO PRZYNIESIE CI PRZYSZŁOŚĆ?</h1>



      {/* <Button /> */}

      {tarrots.map((item) =>
        <div key={item.id}>
          <img src={item.img} alt="card" />
        </div>)}
    </div>
  );
};
export default Card;
