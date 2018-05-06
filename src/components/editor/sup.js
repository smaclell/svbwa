import React, { Component } from 'react';

class Sup extends Component {
  render() {
    const { block, contentState } = this.props;
    const data = contentState.getPlainText();
    const className = data.endsWith(':') ? 'chapter' : 'verse';
    return <sup className={className}>{data}</sup>;
  }
}

export default Sup;
