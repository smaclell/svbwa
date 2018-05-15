import React, { Component } from 'react';

export class Source extends Component {
  render() {
    return <strong>{this.props.source}</strong>
  }
}

export class Blockquote extends Component {
  render() {
    const { block, contentState, ...props } = this.props;
    const entity = contentState.getEntity(
      block.getEntityAt(0)
    );
    const { source, color } = entity.getData();
    const type = entity.getType();

    return (
      <blockquote className={['bubble', color]} {...props}>
        <Source source={source} />
        {this.props.children}
      </blockquote>
    );
  }
}
