import React, { Component } from 'react';
import { Editor, EditorState, Modifier, RichUtils, convertToRaw } from 'draft-js';
import "draft-js/dist/Draft.css";

import decorators from './editor/decorators';
import renderer from './editor/renderer';

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'blockquote bubble';
  }
}

const styleMap = {
  blue: {
    background: '#97bbff',
    color: '#0c009d',
  },
  green: {
    background: '#b9f8b9',
    color: '#006400',
  },
  red: {
    background: '#ffadad',
    color: '#d60000',
  },
};

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
    this.editor.focus();
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
    this.editor.focus();
    const currentState = this.state.editorState;
    const contentState = currentState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'QUOTE',
      'MUTABLE',
      { color: 'red', source: 'Jesus' }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      currentState.getSelection(),
      entityKey
    );

    const newEditorState = EditorState.push(currentState, contentStateWithLink, 'apply-entity');
    const a = RichUtils.toggleBlockType(newEditorState, 'blockquote')
    const b = RichUtils.toggleInlineStyle(a, 'red');

    this.onChange(b);
  }

  onNextStyle = (e) => {
    e.preventDefault();
    this.editor.focus();
    const currentState = this.state.editorState;
    const contentState = currentState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'QUOTE',
      'MUTABLE',
      { color: 'red', source: 'Jesus' }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      currentState.getSelection(),
      entityKey
    );

    const newEditorState = EditorState.push(currentState, contentStateWithLink, 'apply-entity');
    const a = RichUtils.toggleBlockType(newEditorState, 'blockquote')
    const b = RichUtils.toggleInlineStyle(b, 'bubble red');

    this.onChange(b);
  }

  onPrint = () => console.log(convertToRaw(this.state.editorState.getCurrentContent()))

  render() {
    return (
      <div>
        <div>
          <button id="super" onClick={this.onSuperClick}>^</button>
          <button id="quote" onClick={this.onAddQuote}>quote</button>
          <button id="adjust" onClick={this.onNextStyle}>next</button>
          <button id="print" onClick={this.onPrint}>print</button>
        </div>
        <Editor
          ref={r => this.editor = r}
          customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          blockRendererFn={renderer}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default OurEditor;
