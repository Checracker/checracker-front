"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ArrowRight from "/public/images/ArrowRight.svg";
import EmptyCircle from "/public/images/EmptyCircle.svg";
import Cookie from "/public/images/Cookie.svg";
import Bell from "/public/images/Bell.svg";
import { BoardColor } from "@/app/(pages)/board/page";

type ColorProps = {
  colors: BoardColor;
};

type Item = {
  id: number;
  title: string;
  checked: boolean;
};
const DummyData: Item[] = [
  { id: 1, title: "리액트 기초 알아보기", checked: true },
  { id: 2, title: "리액트 기초 알아보기", checked: false },
  { id: 3, title: "리액트 기초 알아보기", checked: false },
];

export default function Board({ colors }: ColorProps) {
  const nextId = useRef<number>(DummyData.length + 1);
  const [todoList, setTodoList] = useState<Item[]>(DummyData);

  const onChangeCheckBox = ({
    isChecked,
    id,
  }: {
    id: number;
    isChecked: boolean;
  }) => {
    const idx = Number(id);
    const copyTodoList = [...todoList];
    const [newData] = copyTodoList.splice(idx - 1, 1);
    newData.checked = isChecked;

    copyTodoList.splice(idx - 1, 0, newData);
    setTodoList(copyTodoList);
  };

  const onClickBtn = () => {
    const dummyAddData = {
      id: nextId.current,
      title: `더미데이터입니다` + nextId,
      checked: false,
    };

    const currentTodoList = [...todoList];
    currentTodoList.push(dummyAddData);
    setTodoList(currentTodoList);
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
      <TodoList>
        {todoList.map((todo, idx) => {
          return (
            <ToDoItem key={todo.id}>
              <TodoItemDetailBox>
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
              </TodoItemDetailBox>
              <DateBox>목표일 2023 / 07 / 28</DateBox>
            </ToDoItem>
          );
        })}
      </TodoList>
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

const ToDoItem = styled(FlexRowBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-height: 48px;
  border-radius: 12px;
  padding: 0 8px;
`;

const TodoList = styled(FlexColBox)`
  overflow-y: scroll;
  gap: 8px;
`;

const BoardHeader = styled(FlexRowBox)`
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;
const BoardContainer = styled(FlexColBox)<ColorProps>`
  padding: 1rem;
  background-color: ${(props) => props.colors.bgColor};
  height: calc(100vh / 2 - 40px);
  min-width: 530px;
  min-height: 324px;
  border-radius: 8px;
`;
const AddButton = styled(Button)<ColorProps>`
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

const Hr = styled.hr<ColorProps>`
  border: 2px solid;
  border-color: ${(props) => props.colors.hrColor};
`;
const TitleBox = styled(FlexRowBox)<ColorProps>`
  padding: 4px 8px;
  gap: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.colors.titleText};
`;

const NumberBackground = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) => props.colors.numberBgColor};
  width: 36px;
  height: 36px;
  font-weight: 400;
`;

const ShowDetailButton = styled.div<ColorProps>`
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

const TodoItemDetailBox = styled(FlexRowBox)`
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
