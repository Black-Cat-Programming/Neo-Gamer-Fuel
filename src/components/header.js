import React from "react"
import { Link } from "gatsby"
import css from "../styles/global.css"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to} activeStyle={{ color: "red" }} >{props.children}</Link>
    </li>
)

const Header = ({children}) => {
    return(
        <header style={css.headerStyle}>
            <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none'}}>
                <h3 style={{ display: 'inline' }}>Gamer Fuel</h3>
            </Link>
            <ul style={{ listStyle: 'none', float: 'right' }}>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/all-recipes/">Recipes</ListLink>
                <ListLink to="/login/">Log in</ListLink>
            </ul>
        </header>
    )
}

export default Header