import React from "react";
import PropTypes from "prop-types";

const Advert = props => {
  const { merchandise, theme } = props;

  return (
    <React.Fragment>
      <section className="advert">
            <h1>MERCHANDISE</h1>
            <h2>"I stand with Trans Troops"</h2>
            <div className="merch"></div>
            <p>Purchase your "I stand with Trans Troops." shirt today to help support OutServe-SLDN and Minority Veterans of America in the continued fight for open transgender service and to build transgender supportive programs and services for the military and veteran community.</p>
            <a href="https://www.etsy.com/listing/690076485/stand-with-trans-troops-tee?ref=shop_home_active_1&frs=1" className="buttonlink">PURCHASE YOUR SHIRT</a>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .advert {
          align-items: center;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 80vh;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .merch {
          background-image: url(${merchandise.small});
          width: 350px;
          height: 238px;
        }

        h2 {
          color: ${theme.hero.h2.color};
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


        @from-width tablet {
          .merch {
            background-image: url(${merchandise.medium});
            width: 550px;
            height: 374px;
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
          .merch {
            background-image: url(${merchandise.large});
            width: 948px;
            height: 645px;
          }
          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }
          button {
            font-size: ${theme.font.size.l};
          }
        }

      `}</style>
    </React.Fragment>
  );
};

Advert.propTypes = {
  merchandise: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Advert;
