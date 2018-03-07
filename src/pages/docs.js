import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pic01 from '../images/pic01.jpg'

class Docs extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div>
        <Helmet>
          <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
          <meta
            name="description"
            content={get(this, 'props.data.site.siteMetadata.description')}
          />
        </Helmet>
        <div className="centered">
          <h1>Docs are coming soon...</h1>
          <Link to="/">Go Back</Link>
        </div>
        {/*posts.map(({ node: { id, frontmatter, excerpt, timeToRead } }) => {
          return (
            <div key={id}>
              <h1>{frontmatter.title}</h1>
              <p>
                <small>{timeToRead} minutes</small>
              </p>
              <p>{excerpt}</p>
            </div>
          )
        })*/}
      </div>
    )
  }
}

Docs.propTypes = {
  route: React.PropTypes.object,
}

export default Docs

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
