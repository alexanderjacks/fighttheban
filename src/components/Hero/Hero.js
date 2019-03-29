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
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .youwillseemenow {
          color: teal;
          font-size: 6rem;
        }

        img {
          border: 0px;
        }

        .logo {
            width: 760px;
            height: 628px;         
            background-image: ${theme.hero.backgroundpicdesk};
            background-size: cover;
        }
        @media screen and (max-width: 992px){
          .logo {
            width: 550px;
            height: 455px;         
            background-image: ${theme.hero.backgroundpictab};
            background-size: cover;
          }
        }
        @media screen and (max-width: 500px){
          .logo {
            width: 350px;
            height: 289px;         
            background-image: ${theme.hero.backgroundpicmob};
            background-size: cover;
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
