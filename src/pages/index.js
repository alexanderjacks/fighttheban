import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import merch from "../images/png/merch.png";


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

        
        <section className="important">
          <hr ref={this.separator} />
          <h1>rise up and resist...</h1>
          <p>On April 12th, 2019, the Department of Defense will begin to implement Directive-Type Memorandum 19-004, <em>a ban on transgender individuals serving openly in the military</em>. This directive is inhumane, discriminatory, and harms individuals who are willing and able to serve in the U.S. Armed Forces.</p>
          <h2>To be clear...</h2>
          <p className="windup">this is more than a military issue, this is more than an LGBTQ+ issue, this is more than a transgender issue,</p>
          <h2>this is an issue of human rights.</h2>
          <h1>APRIL 13, 2019</h1>
          <p>Join Minority Veterans of America, OutServe-SLDN, and partners across the country as we rally for the rights of transgender individuals. Stand with us as we oppose the discriminatory and inhumane policy that effectively bans trans folks from joining and continuing to serve in the U.S. Armed Forces.</p>
          <h1>RALLY LOCATIONS</h1>
          <hr ref={this.separator} className="" />
        </section>

        <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <section className="important">
          <div>
            <h1>MERCHANDISE</h1>
            <h2>"I stand with Trans Troops"</h2>
            <p>Purchase your "I stand with Trans Troops." shirt today to help support OutServe-SLDN and Minority Veterans of America in the continued fight for open transgender service and to build transgender supportive programs and services for the military and veteran community.</p>
            <img src={merch} />
            <a href="https://www.etsy.com/listing/690076485/stand-with-trans-troops-tee?ref=shop_home_active_1&frs=1" className="buttonlink">PURCHASE YOUR SHIRT</a>
          </div>
          <div>
            <h1>WANT TO HOST A RALLY?</h1>
            <p>You can sign up to host a rally in your city. Fill out the following form and a member of the organizing team will be in contact with you. Deadline to sign up is April 6, 2019.</p>
            <a href="https://goo.gl/forms/oac2va6SSelOeobk2" className="buttonlink">SIGN UP TO HOST A RALLY</a>
          </div>
          <div>
            <h1>RALLY PARTNERSHIP</h1>
            <p>Are you a community organization that would like to sign on to support the rally as a partner? We're looking for partner organizations from the military or veteran community, non-profit organizations, and others who would like to sign on as a rally partner.</p>
            <a href="https://goo.gl/forms/Ix8z7RSnYN3XhI6S2" className="buttonlink">SIGN ON AS A RALLY PARTNER</a>
          </div>
          <div>
            <h1>BECOME A RALLY SPONSOR</h1>
            <p>If you are interested in becoming a rally sponsor, please <a href="mailto:lchurch@minorityvets.org">email Lindsay Church</a>.</p>
          </div>
        </section>


        <Seo facebook={facebook} />

        <style jsx>{`
          .important {
            justify-content: center;
            max-width: 80vw;
            padding: 1.3rem;
            padding-top: 4rem;
            padding-left: 10vw;
            min-height: 80vh;
          }

          .important div {
            margin: 3rem;
            display: flex;
            flex-direction: column;
          }

          .important h1  {
            flex: 1;
            align-items: center;
            color: #f15d4e;
            padding: 1.3rem;
            font-size: 2.8rem;
          }

          .important h2  {
            color: #04476d;
            padding: 1.3rem;
          }

          .important p  {
            padding: 1.3rem;
            letter-spacing: 0.1rem;
          }

          .windup {
            font-size: 1.15rem;
            letter-spacing: 0.2rem;
          }

          hr {
            margin: 0;
            border: 0;
          }
          .buttonlink {
            color: white;
            background-color: #f15d4e;
            padding: 1.2rem;
            margin: auto;
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
      sort: { fields: [fields___prefix], order: ASC }
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
