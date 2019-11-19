import React from "react";
import { AiFillWechat } from "react-icons/ai";
import { StaticQuery, graphql } from "gatsby";
import "tachyons";

export default props => {
  let { desc, img, location } = props;
  location = encodeURIComponent(location.pathname);
  desc = encodeURIComponent(desc);
  img = encodeURIComponent(img);
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={data => {
        const base = encodeURIComponent(data.site.siteMetadata.siteUrl);
        return (
          <div className="dn db-l" style={{ gridArea: "sidebar" }}>
            <div
              className="w3 bg-dark-gray flex flex-wrap"
              style={{ position: "sticky", top: "4rem", marginTop: "100px" }}
            >
              <a
                href="https://www.aixinghui.top/static/745be9ec277fb3a51f0981e995b42b37/c108b/qrcode.jpg"
                className="w-100 h3 flex items-center justify-center b near-white"
              >
                <AiFillWechat />
              </a>
            </div>
          </div>
        );
      }}
    />
  );
};
