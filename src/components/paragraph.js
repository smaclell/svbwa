import React from 'react';

import Text from './text';

const Paragraph = ({ value, content }) => (
  <Text value={value || content} classNames={["text"]} />
);

export default Paragraph;
