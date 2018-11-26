import * as React from "react";
import { css } from "react-emotion";

export const ListComponent: React.SFC<{ title: string }> = ({ title }) => {
  return <li className={list}>{title}</li>;
};

const list = css`
  color: #41c7c7;
  padding: 10px 0;
`;
