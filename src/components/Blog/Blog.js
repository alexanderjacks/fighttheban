import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          min-width: 100%;
          align-items: top;
          justify-content: center;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        ul div {
          align-items: center;
          justify-content: center;
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            max-width: ${theme.text.maxWidth.desktop};
          }
          ul>* {
            flex: 1 1 42vw;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
