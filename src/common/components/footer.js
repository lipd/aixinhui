import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub
} from "react-icons/fa";
import "tachyons";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="pa2 bg-dark-gray near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              {data.site.siteMetadata.facebook && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </a>
              )}

              {data.site.siteMetadata.youtube && (
                <a className="near-white" href={data.site.siteMetadata.youtube}>
                  <FaYoutube />
                </a>
              )}

              {data.site.siteMetadata.github && (
                <a className="near-white" href={data.site.siteMetadata.github}>
                  <FaGithub />
                </a>
              )}

              {data.site.siteMetadata.pinterest && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.pinterest}
                >
                  <FaPinterestP />
                </a>
              )}

              {data.site.siteMetadata.twitter && (
                <a className="near-white" href={data.site.siteMetadata.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              咨询与报名
            </span>
            <a
              href="https://www.aixinghui.top/static/745be9ec277fb3a51f0981e995b42b37/c108b/qrcode.jpg"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              微信公众号
            </a>
            <Link to="/" className="near-white sans-serif f5 tracked pv1 db">
              联系方式
            </Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              关于
            </span>
            <a
              href="http://www.difat.com/"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              丹尼奖
            </a>
            {/* <a
              href={data.site.siteMetadata.mailChimpUrl}
              className="near-white sans-serif f5 tracked pv1 db"
            >
              微信公众号
            </a> */}
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            {/* <a
              href="/sitemap.xml"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              SITEMAP
            </a>
            <span className="mh1">|</span>
            <Link
              to="/privacy"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              PRIVACY
            </Link>
            <span className="mh1">|</span>
            <a
              href="https://github.com/madelyneriksen/gatsby-starter-tyra"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              THEME
            </a> */}
          </div>
        </div>
        <div className="w-100 mw9 silver center sans-serif f6">
          <p>网站内容最终解释权归爱星汇（北京）文化传媒有限公司所有</p>
        </div>
      </footer>
    )}
  />
);
