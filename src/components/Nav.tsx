import { Link } from "react-router-dom"

import '../styles/nav.css'

function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="first">
                <span className="red">D</span>
                <span className="green"> E </span>
                <span className="blue">P</span>
            </Link>
            <Link to="/sound">Sonido</Link>
            <Link to="/light">Luz</Link>
        </div>
    )
}

export default Nav
