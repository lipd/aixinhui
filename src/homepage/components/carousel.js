import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Carousel } from "antd";
import Img from "gatsby-image";

export default props => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "img/posters/poster3.png" }) {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "img/posters/poster1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "img/posters/poster2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Carousel autoplay>
        <div>
          <Img
            className="w-100 vh-50 mw9 center"
            fluid={data.image1.childImageSharp.fluid}
            alt="dieyin"
          />
        </div>
        <div>
          <Img
            className="w-100 vh-50 mw9 center"
            fluid={data.image2.childImageSharp.fluid}
            alt="competition post 1"
          />
        </div>
        <div>
          <Img
            className="w-100 vh-50 mw9 center"
            fluid={data.image3.childImageSharp.fluid}
            alt="competition post 2"
          />
        </div>
      </Carousel>
    )}
  />
);
