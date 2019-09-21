import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/all"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

// For Default Image if no image in Contentful
const getImage = graphql`
    query{
        file(relativePath:{eq:"defaultBcg.jpeg"}){
            childImageSharp{
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`



const Tour = ({ tour }) => {
  //Data For Default Image
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid

  const { name, price, country, days, slug, images } = tour

  // let mainImage
  // if(images){
  //   mainImage = images[0].fluid
  // }else{
  //   mainImage = img
  // }
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour"/>
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>details</AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}/>
            {country || "default country"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour