import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <section className="headliner">
          <hr ref={this.separator} />
          <h1>rise up and resist...</h1>
          <p>On April 12th, 2019, the Department of Defense will begin to implement Directive-Type Memorandum 19-004, a ban on transgender individuals serving openly in the military. This directive is inhumane, discriminatory, and harms individuals who are willing and able to serve in the U.S. Armed Forces.</p>
          <h2>To be clear...</h2>
          <p>this is more than a military issue, this is more than an LGBTQ+ issue, this is more than a transgender issue,</p>
          <h2>this is an issue of human rights.</h2>
          <h1>APRIL 13, 2019</h1>
          <p>Join Minority Veterans of America, OutServe-SLDN, and partners across the country as we rally for the rights of transgender individuals. Stand with us as we oppose the discriminatory and inhumane policy that effectively bans trans folks from joining and continuing to serve in the U.S. Armed Forces.</p>
          <h1>RALLY LOCATIONS</h1>
          <hr ref={this.separator} />
        </section>

        <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />

        <style jsx>{`
          .headliner {
            justify-content: center;
            max-width: 80vw;
            padding-top: 4rem;
            padding-left: 10vw;
            min-height: 100vh;
            height: 100px;
          }

          .headliner h1  {
            color: #f15d4e;
            padding: 1rem;
          }

          .headliner h2  {
            color: #04476d;
            padding: 1rem;
          }

          .headliner p  {
            padding: 1rem;
          }

          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
