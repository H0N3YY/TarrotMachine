import "../style/card.css"

export default function Tarrot(props) {
    return (
        <div className="card">
            <img className="tarrot_card" src={props.img} />
        </div>
    )
}