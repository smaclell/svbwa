import React from 'react';

import Text from './text';

const Speech = ({ source, color, value }) => (
  <div>
    <p className="source">{source}</p>
    <Text value={value} classNames={["bubble", color]} />
  </div>
);

export default Speech;
