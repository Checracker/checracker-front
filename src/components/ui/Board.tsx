"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

type Props = {
  colors: {
    bgColor: string;
    addBtnColor: string;
    hrColor: string;
    titleText: string;
  };
};

type colorProps = {
  colors: {
    bgColor: string;
    addBtnColor: string;
    hrColor: string;
    titleText: string;
  };
};

export default function Board({ colors }: Props) {
  return (
    <BoardContainer colors={colors}>
      <BoardHeader>
        <TitleBox colors={colors}>
          <div>2</div>
          <div>중요O 긴급x</div>
        </TitleBox>
        <ShowDetailButton colors={colors}>
          자세히보기 <div>화살표아이콘</div>
        </ShowDetailButton>
      </BoardHeader>
      <Hr colors={colors}></Hr>
      <AddButton colors={colors}>
        <div>+</div>
        <div>할 일 추가하기</div>
      </AddButton>
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
      </List>
    </BoardContainer>
  );
}

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled(FlexRowBox)`
  display: flex;
  align-items: center;
  background-color: white;
  height: 48px;
  border-radius: 12px;
  padding: 0 8px;
`;

const List = styled(FlexColBox)`
  gap: 8px;
`;

const BoardHeader = styled(FlexRowBox)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const BoardContainer = styled(FlexColBox)<colorProps>`
  padding: 1rem;
  background-color: ${(props) => props.colors.bgColor};
  height: 100%;
  min-width: 530px;
  min-height: 324px;
  border-radius: 8px;
`;

const AddButton = styled(Button)<colorProps>`
  background-color: ${(props) => props.colors.addBtnColor};
  color: white;
  border-radius: 12px;
  padding: 0 16px;
  height: 50px;
  gap: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  line-height: 24px;
  font-weight: 500;
  margin: 12px 0px;

  &:hover {
    background-color: ${(props) => props.colors.addBtnColor};
  }
`;

const Hr = styled.hr<colorProps>`
  border: 2px solid;
  border-color: ${(props) => props.colors.hrColor};
`;
const TitleBox = styled(FlexRowBox)<colorProps>`
  padding: 4px 8px;
  gap: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.colors.titleText};
`;

const ShowDetailButton = styled.div<colorProps>`
  font-weight: 500;
  line-height: 24px;
  gap: 4px;
  color: ${(props) => props.colors.titleText};
`;
