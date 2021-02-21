import React from "react"
import { Link } from "gatsby"

import logo from "../images/Gamer-Fuel-New-LOGO-03.png"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to} activeStyle={{ color: "red" }} >{props.children}</Link>
    </li>
)

const Header = ({children}) => {
    return(
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Gamer Fuel" />
                </Link>
                <ul>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/all-recipes/">Recipes</Link></li>
                    <li><Link to="/login/">Log in</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header