import React from "react"
import { Link } from "gatsby"
import css from "../styles/global.css"



// const ListLink = props => (
//     <li style={{ display: 'inline-block', marginRight: '1rem' }}>
//         <Link to={props.to} activeStyle={{ color: "red" }} >{props.children}</Link>
//     </li>
// )

const Footer = ({children}) => {
    return(
        <footer style={css.footerStyle}>
            <p>Footer starts here</p>
            <Link to="/">Back to top</Link>
        </footer>
    )
}

export default Footer