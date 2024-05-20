import './Card.css'

export default function Card(props) {
    return (
        <div className='contain'>

            <h1 id='hProduct'>{props.Title}</h1>
            <div className="Card">
                <img src={props.Image}></img>
                <p>{props.Description}</p>
                <p id='price'>{props.Price}</p>
                <button id="btnCard">CardPay</button>

            </div>

        </div>
    )
}