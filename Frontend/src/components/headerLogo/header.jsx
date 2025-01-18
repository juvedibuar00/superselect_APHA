import "./header.css";
import Logo from "./logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>
                <div className="header-actions">
                    <Link to="/" className="login">Login</Link>
                    <Link to='cadastro' className="cadastrar-se">Cadastrar-se</Link>
                </div>
            </header>
        </>
    );
}

export default Header;
