import * as React from "react";
import { css } from "react-emotion";
import { ListComponent } from "./SideBarList";

export const SideBarComponents: React.SFC<{}> = () => {
  return (
    <ul className={sideBarList}>
      <ListComponent title="About me" />
      <ListComponent title="Blog" />
      <ListComponent title="Tags" />
      <ListComponent title="Archives" />
      <ListComponent title="Contact" />
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
