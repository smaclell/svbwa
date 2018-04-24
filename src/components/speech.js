import React from 'react';

import Text from './text';

const Speech = ({ source, color, text }) => (
  <div>
    <p className="source">{source}</p>
    <Text value={text} classNames={["bubble", color]} />
  </div>
);

export default Speech;
