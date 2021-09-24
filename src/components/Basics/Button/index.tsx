import React from "react";
import { Content, TagButton } from "./styles";

interface IProps {
  onClick: () => void;
}

export default function Button ({ onClick }: IProps) {
  return (
    <Content>
      <TagButton onClick={onClick}>Add Tag</TagButton>
    </Content>
  )
}