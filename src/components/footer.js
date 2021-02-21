import React from "react"
import { Link } from "gatsby"



// const ListLink = props => (
//     <li style={{ display: 'inline-block', marginRight: '1rem' }}>
//         <Link to={props.to} activeStyle={{ color: "red" }} >{props.children}</Link>
//     </li>
// )

const Footer = ({children}) => {
    return(
        <footer>
            <div className="container">
                <p>Made by BlackCatProgramming</p>
            </div>
        </footer>
    )
}

export default Footer