"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

const MyFroalaEditor = dynamic(
  async () => {
    const values = await Promise.all([
      import("react-froala-wysiwyg"), // must be first import since we are doing values[0] in return
    ]);
    return values[0];
  },
  {
    loading: () => <p>LOADING!!!</p>,
    ssr: false,
  },
);

export default function FroalaEditor() {
  let [count, setCount] = useState([0, 0, 0]);
  const [msg, setMsg] = useState("");

  const onChangeHandler = () => {};

  const config = {
    toolbarButtons: [
      "bold",
      "italic",
      "underline",
      "paragraphFormat",
      "align",
      "markdown",
    ],
    charCounterMax: 1000,
  };

  return (
    <div>
      <MyFroalaEditor
        config={config}
        onModelChange={onChangeHandler}
        model={msg}
      />
    </div>
  );
}
