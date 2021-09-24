import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { SERACH, TEXT } from "utils/constants";
import { Content, TagInput } from "./styles";

interface IProps {
  type: string;
  onChange: (name: string) => void;
  pressEnter: (name: string) => void;
}

export default function Input ({ type, onChange, pressEnter }: IProps) {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onChange(e.target.value);
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      pressEnter(name);
    }
  }

  return (
    <Content className="w-full dis-flex">
      <TagInput
        type={TEXT}
        placeholder="Placeholder"
        className="w-full"
        value={name}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        style={{paddingLeft: (type === SERACH) ? "3rem" : "1rem"}}
      />
    </Content>
  )
}