"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ArrowRight from "/public/images/ArrowRight.svg";
import EmptyCircle from "/public/images/EmptyCircle.svg";
import Cookie from "/public/images/Cookie.svg";
import Bell from "/public/images/Bell.svg";
type Props = {
  colors: {
    bgColor: string;
    addBtnColor: string;
    hrColor: string;
    titleText: string;
    numberBgColor: string;
  };
};

type colorProps = {
  colors: {
    bgColor: string;
    addBtnColor: string;
    hrColor: string;
    titleText: string;
    numberBgColor: string;
  };
};

type dataType = itemType[];

type itemType = {
  id: number;
  title: string;
  checked: boolean;
};
const DummyData: dataType = [
  { id: 1, title: "리액트 기초 알아보기", checked: true },
  { id: 2, title: "리액트 기초 알아보기", checked: false },
  { id: 3, title: "리액트 기초 알아보기", checked: false },
];

export default function Board({ colors }: Props) {
  const nextId = useRef<number>(DummyData.length + 1);
  const [list, setList] = useState<dataType>(DummyData);

  const onChangeCheckBox = ({
    isChecked,
    id,
  }: {
    id: number;
    isChecked: boolean;
  }) => {
    const idx = Number(id);
    const copyList = [...list];
    const [newData] = copyList.splice(idx - 1, 1);
    newData.checked = isChecked;

    copyList.splice(idx - 1, 0, newData);
    setList(copyList);
  };

  const onClickBtn = () => {
    const dummyAddData = {
      id: nextId.current,
      title: `더미데이터입니다` + nextId,
      checked: false,
    };

    const currentList = [...list];
    currentList.push(dummyAddData);
    setList(currentList);
  };

  return (
    <BoardContainer colors={colors}>
      <BoardHeader>
        <TitleBox colors={colors}>
          <NumberBackground colors={colors}>2</NumberBackground>
          <div>중요O 긴급x</div>
        </TitleBox>
        <ShowDetailButton colors={colors}>
          자세히보기{" "}
          <ArrowRight
            width={24}
            height={24}
            color={colors.titleText}
            fill={colors.titleText}
          />
        </ShowDetailButton>
      </BoardHeader>
      <Hr colors={colors}></Hr>
      <AddButton colors={colors} onClick={onClickBtn}>
        <Image
          src={"/images/AddFill.svg"}
          width={24}
          height={24}
          alt={"AddFill"}
        />
        <div>할 일 추가하기</div>
      </AddButton>
      <List>
        {list.map((todo, idx) => {
          return (
            <ListItem key={todo.id}>
              <ListItemDetailBox>
                {todo.checked ? (
                  <EmptyCircle
                    width={48}
                    height={48}
                    onClick={() =>
                      onChangeCheckBox({ id: todo.id, isChecked: false })
                    }
                  ></EmptyCircle>
                ) : (
                  <Cookie
                    onClick={() =>
                      onChangeCheckBox({ id: todo.id, isChecked: true })
                    }
                  />
                )}
                <Bell></Bell>
                {todo.checked ? (
                  <TodoDone>{todo.title}</TodoDone>
                ) : (
                  <TodoProgress>{todo.title}</TodoProgress>
                )}
              </ListItemDetailBox>
              <DateBox>목표일 2023 / 07 / 28</DateBox>
            </ListItem>
          );
        })}
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
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-height: 48px;
  border-radius: 12px;
  padding: 0 8px;
`;

const List = styled(FlexColBox)`
  overflow-y: scroll;
  gap: 8px;
`;

const BoardHeader = styled(FlexRowBox)`
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;
const BoardContainer = styled(FlexColBox)<colorProps>`
  padding: 1rem;
  background-color: ${(props) => props.colors.bgColor};
  height: calc(100vh / 2 - 40px);
  min-width: 530px;
  min-height: 324px;
  border-radius: 8px;
`;
const AddButton = styled(Button)<colorProps>`
  background-color: ${(props) => props.colors.addBtnColor};
  min-height: 50px;
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

const NumberBackground = styled.div<colorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) => props.colors.numberBgColor};
  width: 36px;
  height: 36px;
  font-weight: 400;
`;

const ShowDetailButton = styled.div<colorProps>`
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: ${(props) => props.colors.titleText};
  &:hover {
    cursor: pointer;
  }
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0e7ff;
  border-radius: 8px;
  height: 32px;
  font-size: 14px;
  padding: 6px 12px;
`;

const ListItemDetailBox = styled(FlexRowBox)`
  align-items: center;
  justify-content: start;
`;

const TodoDone = styled.div`
  color: #b7b7b7;
  margin: 0px 6px;
  text-decoration: line-through;
`;

const TodoProgress = styled.div`
  margin: 0px 6px;
`;
