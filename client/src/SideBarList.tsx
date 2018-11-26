import * as React from "react";
import { css } from "react-emotion";
import { Link } from "react-router-dom";

export const ListComponent: React.SFC<{ title: string; urlString: string }> = ({
  title,
  urlString
}) => {
  return (
    <Link to={`/${urlString}`}>
      <li className={list}>{title}</li>
    </Link>
  );
};

const list = css`
  color: #41c7c7;
  padding: 10px 0;
`;
