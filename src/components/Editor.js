import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = (props) => {
  return (
    <Editor
      //   editorState={state}
      toolbarClassName="editor_toolbar"
      wrapperClassName="wrapperClassName"
      editorClassName="editor_input"
      onEditorStateChange={props.onEditorChange}
    />
  );
};

export default EditorComponent;
