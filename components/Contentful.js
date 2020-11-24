import React, { Component, useState, useEffect } from "react";

const contentful = require("contentful");
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const client = contentful.createClient({
  space: "nlosfrekhm9u",
  accessToken: "ZqSsD7-KLA9hZTyTHml14JpLyKYNHrYAOcjbfkwgx6c",
});

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="title">{children}</h1>
    ),
  },
};

export default (props) => {
  console.log("props", props);
  const field = props.name;
  const [text, setText] = useState("");

  useEffect(function () {
    client
      .getEntry("7yx5wAFjX8U13JZsUvIEWM")
      .then((entry) => {
        return setText(documentToReactComponents(entry.fields[field], options));
      })
      .catch(console.error);
  }, []);

  return (
    <section className="section">
      <div className="container">{text}</div>
    </section>
  );
};
