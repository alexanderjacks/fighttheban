import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <div className="logo">
        </div>
        <h1 className="">
          APRIL 10th & 13th
        </h1>
        <ul className="rally-partners">
<li>Minority Veterans of America</li>
<li>OutServe-SLDN</li>
<li>SPARTA</li>
<li>American Military Partners Association</li>
<li>Transgender American Veterans Association</li>
<li>NYC Veterans Alliance</li>
<li>Iraq and Afghanistan Veterans of America</li>
<li>Women’s March Global</li>
<li><a href="https://www.genderjusticeleague.org/">Gender Justice League</a></li>
<li><a href="https://www.seattle.gov/lgbtq">Seattle LGBTQ Commission</a></li>
<li><a href="http://www.seattle.gov/civilrights">Seattle Women’s Commission</a></li>
<li><a href="http://www.utopiaseattle.org/">U.T.O.P.I.A.</a></li>
<li><a href="http://www.thekcvc.org/">King County Veterans Consortium</a></li>
<li><a href="http://ingersollgendercenter.org/">Ingersoll Gender Center</a></li>
<li>Steel City Stonewall Democrats</li>
<li>National Center for Transgender Equality</li>
        </ul>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }
        .logo {
          background-image: url(${backgrounds.mobile});
          width: 350px;
          height: 375px;
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
        .rally-partners {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          list-style: none;
          justify-content: center;
          align-items: center;

          li {
            padding-right: 1.2rem;
          }
        }

        @from-width tablet {
          .logo {
            background-image: url(${backgrounds.tablet});
            width: 480px;
            height: 497px;
          }
          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }
          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .logo {
            background-image: url(${backgrounds.desktop});
            width: 820px;
            height: 855px;
          }
          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
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
