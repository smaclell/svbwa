import React from 'react';

import Verse from './verse';

const Text = ({ classNames, value }) => (
  <p className={classNames.join(' ')}>
    {value.map((x, i) => {
      if (x.verse) {
        return (<Verse key={i} number={x.verse} />);
      }

      if (x.text) {
        return (<span key={i}>{x.text}</span>);
      }

      return null;
    })}
  </p>
);

export default Text;
