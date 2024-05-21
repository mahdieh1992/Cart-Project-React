import './App.css'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

function App() {

    const product=[
        {id:1,Title:"Women's dress" ,Price:2500,Image:'images/women.webp', Description:"Neck Shirt Classic"},
        {Title:"mobile",Price:4500, Image:"images/mobile.webp", Description:"Samsung Galaxy A05s mobile phone with 128 GB capacity and 4 GB RAM"},
        {Title:"sports and travel" ,Price:500, Image:"images/sport.webp" ,Description:"Sports backpack model K-101"},
        { Title:"toys, baby", Price:200 ,Image:"images/toy.webp", Description:"Fruit rabbit design doll, strawberry model" },
        {Title:"Men clothing", Price:100, Image:'images/mencloth.webp', Description:"Boy's hooded"},
        {Title:"cosmetic products" ,Price:3500,Image:"images/customic.webp", Description:"Men's Eau de Parfum Alhambra, model Paco Raban Inoctus" },
        { Title:"Traditional decoration", Price:400 ,Image:"images/decoration.webp" ,Description:"Ara Hanar Fakher Iranian copper and pottery set"},
        {Title:"Traditional dishes", Price:3500,Image:"images/dishes.webp", Description:"Aranic terracotta plate with underglaze painting in cream color"}]
    
    return (
        <section className="Main">
            <Header />
            <Navbar />
            <Card {...product[0]}/>
            <Card {...product[1]}/>
            <Card {...product[2]}/>
            <Card {...product[3]}/>
            <Card {...product[4]}/>
            <Card {...product[5]}/>
            <Card {...product[6]}/>
            <Card {...product[7]} />
        </section >
    )
}

export default App