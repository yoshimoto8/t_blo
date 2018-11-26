import * as React from "react";
import { getHtmlFromMarkdown } from "../../utils/getHtmlFromMarkdown";

class Blog extends React.Component<any, any> {
  render() {
    const markdown: string = "# Hello world";
    return <div>{getHtmlFromMarkdown(markdown)}</div>;
  }
}

export default Blog;

const markdown = "## hello world";
