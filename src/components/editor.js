import React, { Component } from 'react';
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css";

import decorators from './editor/decorators';
import renderer from './editor/renderer';

class OurEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty(decorators) };
  }
  get editorState() { this.state.editorState; }
  onChange = editorState => this.setState({ editorState });

  handleKeyCommand = (command, editorState) => {
    console.log(command);
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onSuperClick = (e) => {
    e.preventDefault();
    const selection = this.state.editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    const selectedText = currentContentBlock.getText().slice(start, end);

    if (currentContentBlock.getType() === 'sup' || (/^\d+:?$/.test(selectedText))) {
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'sup'));
    }
  }

  onAddQuote = (e) => {
    e.preventDefault();
    const contentState = this.state.editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'QUOTE',
      'MUTABLE',
      { level: 1, source: 'Jesus' }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      this.state.editorState.getSelection(),
      entityKey
    );
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'blockquote'));
  }

  render() {
    return (
      <div>
        <div>
          <button id="super" onClick={this.onSuperClick}>^</button>
          <button id="quote" onClick={this.onAddQuote}>quote</button>
        </div>
        <Editor
          blockRendererFn={renderer}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default OurEditor;
