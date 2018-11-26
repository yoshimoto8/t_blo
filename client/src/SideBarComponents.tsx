import * as React from "react";
import { css } from "react-emotion";
import { ListComponent } from "./SideBarList";

export const SideBarComponents: React.SFC<{}> = () => {
  return (
    <ul className={sideBarList}>
      <ListComponent title="About me" urlString="about-me" />
      <ListComponent title="Blog" urlString="blog" />
      <ListComponent title="Tags" urlString="tags" />
      <ListComponent title="Archives" urlString="archives" />
      <ListComponent title="Contact" urlString="contact" />
    </ul>
  );
};

const sideBarList = css`
  padding: 0;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
