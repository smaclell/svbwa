import React from 'react';

import Text from './text';

const Paragraph = ({ text }) => (
  <Text value={text} classNames={["text"]} />
);

export default Paragraph;
