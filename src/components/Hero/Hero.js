import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <img className="logo" />
        <h2 className="marker-font">
          Rally For Open and Authentic <br/>Transgender Military Service
        </h2>
        <h1 className="">
          APRIL 10th & 13th
        </h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background-image: ${theme.hero.background};
          background: url(${theme.hero.background}), linear-gradient(to top, #333333, #333333);
          background-size: contain;
          background-repeat: no-repeat;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .logo {
            background-color: #333333;
            width: 820px;
            height: 666px;         
            background-image: ${theme.hero.backgroundpicdesk};
            background-size: cover;
            background-repeat: no-repeat;
        }
        @media screen and (max-width: 992px){
          .logo {
            width: 480px;
            height: 390px;         
            background-image: ${theme.hero.backgroundpictab};
          }
        }
        @media screen and (max-width: 500px){
          .logo {
            width: 350px;
            height: 284px;         
            background-image: ${theme.hero.backgroundpicmob};
          }
        }

        h2 {
          color: white;
          font-size: 2.4rem;
          text-align: center;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          padding-top: 1.3rem;

          :global(strong) {
            position: relative;
            font-family: Avenir;
          }
        }

      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
