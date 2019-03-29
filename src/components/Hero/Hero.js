import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          FIGHT THE Ban
        </h1>
        <div className="logo-box">
          <img className="logo" />
        </div>
        <button onClick={scrollToContent} aria-label="scroll">
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background-image: ${theme.hero.background};
          background: url(${theme.hero.background}), linear-gradient(to top, black, slategrey);
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .logo-box {
          height: 100%;
          width: 100%;
          overflow: hidden;
          padding-top: 591.44px / 1127.34px * 100%;
          background: '#333333';
          position: relative;
        }

        .logo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;         
          background-image: ${theme.hero.backgroundpic};
          background-size: cover;
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
