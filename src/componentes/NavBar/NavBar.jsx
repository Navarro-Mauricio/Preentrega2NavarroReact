import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import DarkMode from "./DarkMode";
const NavBar = () => {
    return (
        <header>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
            <Link to="/">
                <img className="logoPrincipal" src="/img/LogoPrincipal.svg" alt="" />
            </Link>
            <nav>
                <ul>
                    <li className="headerTexto">
                        <NavLink to="/categoria/2">Stickers</NavLink>
                    </li>

                    <li className="headerTexto">
                        <NavLink to="/categoria/3">Posters</NavLink>
                    </li>
                </ul>

            </nav>
            
            <div className="carritoConNumero">
            <DarkMode />
                <img className="cartImg" src="/img/Cart.svg" alt="" />
                <div className="circulo">
                    5
                </div>
            </div>
        </header>
    )
}

export default NavBar