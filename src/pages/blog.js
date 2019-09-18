import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const blog = () => {
  return (
    <Layout>
      <div>
        Blog Page
      </div>
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export default blog
