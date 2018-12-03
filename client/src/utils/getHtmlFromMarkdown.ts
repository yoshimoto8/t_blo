import * as React from "react";
import remark from "remark";
import remark2react from "remark-react";

// htmlを返すtypeがわからん
export const getHtmlFromMarkdown = (markdown: string): any => {
  const processor = remark().use(remark2react, {});
  const html = processor.processSync(markdown).contents;
  return html;
};

// const remarkReactComponentsOptions = {};

// function createTableCellComponent(tagName) {
//   return class TableCell extends React.Component {
//     render() {
//       const style = { textAlign: this.props.align };
//       const props = { ...this.props, style };
//       return createElement(tagName, props, this.props.children);
//     }
//   };
// }
