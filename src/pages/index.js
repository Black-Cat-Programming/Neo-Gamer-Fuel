import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => (
    <Layout>
        <p>Index content</p>
        <ol>
            <li><Link to="/about">About Page</Link></li>
            <li><Link to="/all-recipes">All Recipes Page</Link></li>
        </ol>
    </Layout>
)

export default Index