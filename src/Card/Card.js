import './Card.css'

export default function Card() {
    return (
        <div className='contain'>
            
            <h1 id='hProduct'>ProductName</h1>
            <div className="Card">
                <img src='product.jpeg'></img>
                <p>This is the best product</p>
                <p id='price'>$3000</p>
                <button id="btnCard">CardPay</button>

            </div>

        </div>
    )
}