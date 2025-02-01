import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <img className="menu-bar" src="menu-bar0.svg" alt="Menu" />
            <div className="navbar-links">
                <div className="nav-item home">Home</div>
                <div className="nav-item contato">Contato</div>
                <div className="nav-item comentarios">Comentários</div>
                <div className="nav-item sobre">Sobre</div>
                {/* <div className="nav-item produtos">Cadastro produtos</div> */}
                <Link to="./cadastroProdutos" className="nav-item produtos">
                    Cadastro Produtos
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
