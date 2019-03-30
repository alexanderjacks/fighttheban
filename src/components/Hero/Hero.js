import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <img className="logo" />
        <h1 className="youwillseemenow">
          Rally for open and authentic transgender military service
        </h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background-image: ${theme.hero.background};
          background: url(${theme.hero.background}), linear-gradient(to top, black, slategrey);
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

        .youwillseemenow {
          color: white;
        }

        img {
          border: 0px;
        }

        .logo {
            width: 820px;
            height: 892px;         
            background-image: ${theme.hero.backgroundpicdesk};
            background-size: cover;
            background-repeat: no-repeat;
        }
        @media screen and (max-width: 992px){
          .logo {
            width: 420px;
            height: 457px;         
            background-image: ${theme.hero.backgroundpictab};
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        @media screen and (max-width: 500px){
          .logo {
            width: 350px;
            height: 381px;         
            background-image: ${theme.hero.backgroundpicmob};
            background-size: cover;
            background-repeat: no-repeat;
          }
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          visibility: hidden;

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
