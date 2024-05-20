import './App.css'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

function App() {
    return (
        <section className="Main">
            <Header />
            <Navbar />
            <Card Title="Women's dress" Price={2500} Image='images/women.webp' Description="Neck Shirt Classic" />
            <Card Title="mobile" Price={4500} Image="images/mobile.webp" Description="Samsung Galaxy A05s mobile phone with 128 GB capacity and 4 GB RAM" />
            <Card Title="sports and travel" Price={500} Image="images/sport.webp" Description="Sports backpack model K-101" />
            <Card Title="toys, baby" Price={200} Image="images/toy.webp" Description="Fruit rabbit design doll, strawberry model" />
            <Card Title="Men clothing" Price={100} Image='images/mencloth.webp' Description="Boy's hooded" />
            <Card Title="cosmetic products" Price={3500} Image="images/customic.webp" Description="Men's Eau de Parfum Alhambra, model Paco Raban Inoctus" />
            <Card Title="Traditional decoration" Price={400} Image="images/decoration.webp" Description="Ara Hanar Fakher Iranian copper and pottery set" />
            <Card Title="Traditional dishes" Price={3500} Image="images/dishes.webp" Description="Aranic terracotta plate with underglaze painting in cream color" />
        </section >
    )
}

export default App