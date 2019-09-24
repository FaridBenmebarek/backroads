import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = ({ data }) => {

  const { title, published, text: { json } } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div>
          <h3>Portfolio</h3>
          <img width="400" src={node.data.target.fields.file['en-US'].url} alt=""/>
        </div>
        )
      },
      "embedded-entry-block": (node) => {
        return(
          <div>
            <h2>Autre posts</h2>
          </div>
        )
      }
    }
  }

  return (
    <Layout>
     <section className={styles.blog}>
       <div className={styles.center}>
         <h1>{title}</h1>
         <h4>publié le : {published}</h4>
         <article className={styles.post}>
           {documentToReactComponents(json, options)}
         </article>
         <AniLink fade to='/blog' className="btn-primary">Retour aux Posts</AniLink>
       </div>
     </section>
    </Layout>
  )
}

export const query = graphql`
    query getPost($slug:String!){
        post:contentfulPost(slug:{eq:$slug}){
            title
            published(formatString:"DD MMM YYYY")
            text {
                json
            }
        }
    }`

export default Blog
