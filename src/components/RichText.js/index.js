import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PropTypes from "prop-types";
import "./RichText.css";

function RichText({ onConvert }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const onChange = (e) => {
    setEditorState(e);
    const html = convertToHTML(editorState.getCurrentContent());
    onConvert(createMarkup(html));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onChange}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
    />
  );
}

RichText.prototype = {
  onConvert: PropTypes.func,
};

RichText.defaultProps = {
  onConvert: () => {},
};

export default RichText;
