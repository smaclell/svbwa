import React from 'react';

import Text from './text';

const Speech = ({ source, color, value, content }) => (
  <div>
    <p className="source">{source}</p>
    <Text value={value || content} classNames={["bubble", color]} />
  </div>
);

export default Speech;
