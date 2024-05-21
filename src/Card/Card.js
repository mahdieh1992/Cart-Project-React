import './Card.css'

export default function Card({ Title: productTitle, Image, Description, Price }) {

    // let {Title,Image,Description,Price}=props
    return (
        Price > 500 &&
        <div className='contain'>

            <h1 id='hProduct'>{productTitle}</h1>
            <div className="Card">
                <img src={Image}></img>
                <p>{Description}</p>
                <p id='price'>{Price}</p>
                <button id="btnCard">CardPay</button>
            </div>

        </div>
    )
}