import React, { useState, useEffect } from "react";
import Button from "components/Basics/Button";
import Input from "components/Basics/Input";
import Tag from "components/Basics/Tag";
import { TEXT } from "utils/constants";
import { Content, TextSection, Text, TagSection, InputSection } from "./styles";

interface IProps {
  id: number;
  name: string;
  created_at: string;
}

export default function ListItem ({ id, name, created_at }: IProps) {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const [newTagName, setNewTagname] = useState("");

  const onChange = (name: string) => {
    setNewTagname(name);
  }

  const onPressEnter = (name: string) => {
    setNewTagname(name);
    onClick();
  }

  const onClick = () => {
    if (newTagName !== "" && tagItems.length < 5) {
      let result: string[] = [];
      if (window.localStorage.getItem("tag-" + id) === null) {
      } else {
        result = tagItems;
      }

      if (!result.includes(newTagName)) {
        result.push(newTagName);
        onSave(JSON.parse(JSON.stringify(result)));
      }
    }
  }

  const onSave = (items: string[]) => {
    window.localStorage.setItem("tag-" + id, JSON.stringify(items));
    setTagItems(items);
  }

  const onDelete = (name: string) => {
    let result: string[] = JSON.parse(JSON.stringify(tagItems));
    let index = result.findIndex(item => item === name);
    result.splice(index, 1);
    onSave(result);
  }

  useEffect(() => {
    let storageItems: string | null = window.localStorage.getItem("tag-" + id);
    if (storageItems === null || storageItems === "[]") {
      setTagItems([]);
    } else {
      setTagItems(JSON.parse(storageItems));
    }
  }, [id]);

  return (
    <Content className="dis-flex">
      <TextSection>
        <Text>Name: {name}</Text>
        <Text>Date: {created_at}</Text>
      </TextSection>

      <TagSection className="dis-flex">
        {
          tagItems.map(tagItem => (
            <Tag
              key={Math.random() * 100000}
              name={tagItem}
              onDelete={onDelete}
            />
          ))
        }
      </TagSection>
      
      <InputSection className="dis-flex">
        <Input
          type={TEXT}
          onChange={onChange}
          pressEnter={onPressEnter}
        />
        <Button
          onClick={onClick}
        />
      </InputSection>
    </Content>
  )
}