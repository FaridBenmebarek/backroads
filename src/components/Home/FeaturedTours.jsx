import React from "react"
import Tour from "../Tours/Tour"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`
    query{
        featuredTours: allContentfulTour(filter:{featured:{eq:true}}) {
            edges {
                node {
                    name
                    price
                    slug
                    country
                    contentful_id
                    days
                    images{
                        fluid{
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {

  const response = useStaticQuery(getTours)
  const tours = response.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="tours" subtitle="spéciaux"/>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">+ de tours</AniLink>
    </section>
  )
}

export default FeaturedTours
