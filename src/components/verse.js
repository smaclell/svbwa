import React from 'react';

// In JSX use className not class. This is because class is special in Javascript
const Verse = ({ number }) => (
  <sup className="verse">{number}&nbsp;</sup>
);

export default Verse;
