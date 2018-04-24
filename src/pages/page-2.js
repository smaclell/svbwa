import React from 'react'
import Link from 'gatsby-link'

import Story from '../components/story';
import Footer from '../components/footer';

const content = [
  { "type": "text", "text": [{ "verse": 1 }, "In the beginning"] },
  { "type": "speech", "source": "rob", "color": "blue", "text": ["In the derp"] }
];

const SecondPage = () => (
  <div>
    <Story content={content} />
    <Footer copyright="Something" />
  </div>
)

export default SecondPage
