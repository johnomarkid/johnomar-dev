import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const data = useStaticQuery(graphql`
    query NavQuery {
      garden: file(absolutePath: { regex: "/garden.png/" }) {
        childImageSharp {
          fixed(width: 28, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const header = (
    <>
      <Link
        style={{
          boxShadow: `none`,
          color: `#532Dff`,
        }}
        to={'/'}
      >
        <Image
          fixed={data.garden.childImageSharp.fixed}
          alt={'garden'}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
          }}
        />
        <h3
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: `1.0rem`,
            marginTop: 0,
            display: 'inline'
          }}
        >
          Your friend John's digital garden
        </h3>
      </Link>
    </>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        {header}
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
