import React from 'react'
import Link from 'gatsby-link'

import Story from '../components/story';
import Footer from '../components/footer';

const SecondPage = ({ data }) => (
  <div>
    <Story content={data.allStoryJson.edges[0].node.content} />
    <Footer copyright="Something" />
  </div>
)

export default SecondPage;

export const query = graphql`
  query stories {
    allStoryJson {
      edges {
        node {
          content {
            type
            source
            color
            content {
              chapter
              verse
              text
            }
          }
        }
      }
    }
  }
`


