import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ title, description }) => {

  const { site } = useStaticQuery(getData)
  const { siteDesc, siteTitle, siteUrl, image, author, twitterUsername } = site.siteMetadata

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "fr" }}>
      <meta name="description" content={description || siteDesc}/>
      <meta name="image" content={image}/>
      {/*  Titter Card */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={twitterUsername}/>
      <meta name="twitter:title" content={siteTitle}/>
      <meta name="twitter:description" content={siteDesc}/>
      <meta name="twitter:image" content={`${siteUrl}${image}`}/>
    </Helmet>
  )
}

const getData = graphql`
    query{
        site{
            siteMetadata{
                siteTitle:title
                siteDesc:description
                author
                siteUrl
                image
                twitterUsername
            }
        }
    }`

export default SEO
