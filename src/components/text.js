import React from 'react';

import Verse from './verse';

const Text = ({ classNames, value }) => (
  <p className={classNames.join(' ')}>
    {value.map((x, i) => {
      if (x.verse) {
        return (<Verse key={i} number={x.verse} />);
      }

      return (
        <span key={i}>{x}</span>
      );
    })}
  </p>
);

export default Text;
