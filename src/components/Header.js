import Frase from './Frase.js';
import '../scss/main.css';

function Header(){


    return(
        <header className="header">
            <ul className="list">
                <li className="list__item">Home</li>

                <li className="list__item">Contato</li>

                <li className="list__item">Sobre</li>
            </ul>
        </header>
    )
}

export default Header;