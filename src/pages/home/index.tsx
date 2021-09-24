import React, { useState, useEffect } from "react";
import instance from "utils/instance";
import ListItem from "components/ListItem";
import Input from "components/Basics/Input";
import { MovieResponse } from "utils/interfaces";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { SERACH } from "utils/constants";
import { Content, SearchSection, SearchIcon, LoadingIcon } from "./styles";

export default function Home () {
  const [allListItems, setAllListItems] = useState<MovieResponse[]>([]);
  const [listItems, setListItems] = useState<MovieResponse[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setLoading] = useState(true);

  const onSearch = (text: string) => {
    setSearchWord(text);
  }

  useEffect(() => {
    let items = allListItems;
    if (searchWord !== "") {
      items = items.filter(item => (window.localStorage.getItem("tag-" + item.id)) !== null && (window.localStorage.getItem("tag-" + item.id))?.indexOf(searchWord) !== -1);
    }
    setListItems(items);
  }, [searchWord, allListItems]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response: MovieResponse[] = (await instance.get("/movies.json?key=bf3c1c60")).data;
      setAllListItems(response);
      setListItems(response);
      setLoading(false);
    };
  
    fetchData();
  }, []);

  return (
    <>
      {
        (!isLoading) ? (
          <Content>
            <SearchSection>
              <SearchIcon>
                <SearchOutlined />
              </SearchIcon>
              <Input
                type={SERACH}
                onChange={onSearch}
                pressEnter={onSearch}
              />
            </SearchSection>
            
            {
              listItems.map(listItem => (
                <ListItem
                  key={listItem?.id}
                  id={listItem?.id}
                  name={listItem?.name}
                  created_at={listItem?.created_at}
                />
              ))
            }
          </Content>
        ) : (
          <LoadingIcon>
            <SyncOutlined spin style={{ fontSize: "5rem" }} />
          </LoadingIcon>
        )
      }
    </>
  )
}