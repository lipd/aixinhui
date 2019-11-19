import React from "react";
import Layout from "../common/layouts";
import { Link, graphql } from "gatsby";
import Breadcrumbs from "./components/breadcrumbs";
import Preview from "./components/post-preview.js";
import Seo from "../common/seo";
import "tachyons";

const mate = {
  istar: "iStar 音乐剧"
};

const categoryTitle = category => {
  if (category in mate) {
    return mate[category];
  }
  return category;
};

export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    const category = this.props.pageContext.category;
    return (
      <Layout>
        <Seo
          title={`关于 ${category} - 第 ${this.props.pageContext.pageNumber} 页`}
        />
        <div
          style={{ backgroundColor: "#333" }}
          className="ph2 pv5 flex flex-column justify-center items-center"
        >
          <h1 style={{ color: "white" }} className="display fw4 f1-l f2 t">
            {categoryTitle(category)}
          </h1>
        </div>
        <div className="mw9 center">
          <Breadcrumbs
            lastName={category}
            lastPath={`${category}`}
            currentPage={`第 ${this.props.pageContext.pageNumber} 页`}
          />
          {posts.map(({ node }) => (
            <Preview
              fluidImage={node.frontmatter.postImage.childImageSharp.fluid}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              category={node.frontmatter.category}
              description={node.frontmatter.metaDescription}
            />
          ))}
          <div className="pv5 flex w-100">
            {hasNext && (
              <Link
                className="dark-gray sans-serif ttu tracked no-underline"
                to={this.props.pageContext.nextPage}
              >
                下一页 &rarr;
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query categoryPosts($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "post" }, category: { eq: $category } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            category
            metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
