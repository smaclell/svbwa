import React from 'react'

import Paragraph from './paragraph';
import Speech from './speech';

const Story = ({ content }) => (
  <div>
    {content.map((x, i) => {
      if (x.type === 'text') {
        return (<Paragraph key={i} {...x} />);
      }

      if (x.type === 'speech' || x.type === 'quote') {
        return (<Speech key={i} {...x} />);
      }

      return null;
    })}
  </div>
);

export default Story;
