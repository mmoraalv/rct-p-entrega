import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1> Exactus Online </h1>

        <nav>
            <ul>
                <li>Home</li>
                <li>Portatiles</li>
                <li>Monitores</li>
                <li>Accesorios</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar