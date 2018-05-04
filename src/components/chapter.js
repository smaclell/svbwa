import React from 'react';

// In JSX use className not class. This is because class is special in Javascript
const Verse = ({ number }) => (
  <strong><sup className="chapter">{number}&nbsp;</sup></strong>
);

export default Verse;
