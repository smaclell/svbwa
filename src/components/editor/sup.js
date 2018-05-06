import React, { Component } from 'react';

import Chapter from '../chapter';
import Verse from '../verse';

// Based on https://draftjs.org/docs/advanced-topics-decorators.html#content
function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function wrapper(regex) {
  return (contentBlock, callback, contentState) => findWithRegex(regex, contentBlock, callback);
}

const DecoratedComponent = ({ decoratedText }) => {
  const match = decoratedText.match(/(C|V)(\d+)(:?)/);

  const isChapter = match[1] === 'C' || match[3];
  return isChapter ? <Chapter number={match[2]} /> : <Verse number={match[2]} />;
}

export const ChapterDecorator = {
  strategy: wrapper(/C(\d+):?/g),
  component: DecoratedComponent,
};

export const VerseDecorator = {
  strategy: wrapper(/V(\d+)/g),
  component: DecoratedComponent,
};

export class Sup extends Component {
  render() {
    const { block, contentState } = this.props;
    const decoratedText = contentState.getPlainText();
    return <DecoratedComponent decoratedText={decoratedText} />;
  }
}
