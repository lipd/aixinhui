import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={data => (
      <div
        style={{ backgroundColor: "#f8e191" }}
        className="flex flex-column justify-center items-center pa2 pv5"
      >
        <h1 className="fw1 display db dark-gray f2 tc">
          {data.site.siteMetadata.homepageHeader}
        </h1>
        <p className="f4 serif mw7 tc lh-copy">
          {data.site.siteMetadata.homepageAbout}
        </p>
        <Link
          to="/aixinghui"
          className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
        >
          了解爱星汇
        </Link>
      </div>
    )}
  />
);
