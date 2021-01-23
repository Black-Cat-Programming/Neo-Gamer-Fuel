import React from "react"
<<<<<<< HEAD
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
    </div>
  );
}
=======
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
>>>>>>> d12338a35b88dcdf246dcd0f99d3e100f3a99762
