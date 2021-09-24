import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Content, TagButton, CloseIcon } from "./styles";

interface IProps {
  name: string;
  onDelete: (name: string) => void;
}

export default function Tag ({ name, onDelete }: IProps) {
  return (
    <Content className="dis-flex">
      <TagButton>{name}</TagButton>
      <CloseIcon>
        <CloseOutlined onClick={() => onDelete(name)} />
      </CloseIcon>
    </Content>
  )
}