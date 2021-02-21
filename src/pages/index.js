import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => (
    <Layout>
        <section className="home-hero">
            <div className="container">
                <p>Index content</p>
                <ol>
                    <li><Link to="/about">About Page</Link></li>
                    <li><Link to="/all-recipes">All Recipes Page</Link></li>
                </ol>
            </div>
        </section>
    </Layout>
)

export default Index