
import {Link, useLocation} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


export default function Navbar() {
    const location = useLocation();

    const ativar = (url) => {
        if (url === location.pathname) {
            return "btn btn-dark";    
        }
        return "btn btn-outline-primary";
    }
    return (
        <nav>
            <Link to="/" className={ativar('/')}>Inicio</Link>
            <Link to="/listar" className={ativar('/listar')}>Listar</Link>
            <Link to="/novo" className={ativar('/novo')}>Novo</Link>
            <Link to="/Login" className={ativar('/sair')}>Sair</Link>
        </nav>
    )
}