import React from 'react';

import Chapter from './chapter';
import Verse from './verse';

const Text = ({ classNames, value }) => (
  <p className={classNames.join(' ')}>
    {value.map((x, i) => {
      if (x.chapter) {
        return (<Chapter key={i} number={x.chapter} />);
      }

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
