"use client";

import QuadrantTitle from "@/components/ui/quadrant/QuadrantTitle";
import { appRoutes } from "@/constants/appRoutes";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import CloseRound from "@/components/ui/icons/CloseRound";
import { useState } from "react";
import SimpleSelect from "@/components/ui/SimpleSelect";
import classNames from "classnames";
import styled from "@emotion/styled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodoDetailItem from "@/components/TodoDetailItem";
import { dummyTodos } from "@/data/dummy";

type TodoOrder = "진행순" | "완료순" | "날짜순";

type TodoOrderItem = {
  value: TodoOrder;
  name: string;
};

const todoOrderOptions: TodoOrderItem[] = [
  { value: "진행순", name: "진행순" },
  { value: "완료순", name: "완료순" },
  { value: "날짜순", name: "날짜순" },
];

export default function QuadrantPage() {
  const { quadrantId } = useParams();

  if (!(quadrantId >= "1" && quadrantId <= "4")) {
    redirect(`${appRoutes.board}`);
  }

  const defaultTodoOrder = "진행순";
  const [, setSelectedTodoOrder] =
    useState<TodoOrderItem["value"]>(defaultTodoOrder);

  const handleClickAddTodo = () => {};

  return (
    <div className="flex flex-col h-screen">
      <header
        className={classNames(
          "py-4 px-[29px] flex justify-between items-center",
          "bg-slate-900",
        )}
      >
        <div className="flex gap-[10px]">
          <QuadrantTitle quadrant={Number(quadrantId)} />
          <SimpleSelect
            className="w-[200px]"
            options={todoOrderOptions}
            onChange={(value) => {
              setSelectedTodoOrder(value as TodoOrder);
            }}
            label="순서"
            defaultValue={defaultTodoOrder}
          />
        </div>
        <Link href={appRoutes.board}>
          <CloseRound />
        </Link>
      </header>
      <main className="flex flex-col flex-grow overflow-hidden">
        <TodoTableHeader className="flex justify-between px-4 pt-[13px] pb-[10px]">
          <TodoTableHeaderItem className="pl-12">
            할 일 목록
          </TodoTableHeaderItem>
          <div className="flex gap-[10px]">
            <TodoTableHeaderItem className="w-[113px] text-center">
              시작일
            </TodoTableHeaderItem>
            <TodoTableHeaderItem className="w-[113px] text-center">
              목표일
            </TodoTableHeaderItem>
            <TodoTableHeaderItem className="w-[113px] text-center mr-6">
              완료일
            </TodoTableHeaderItem>
          </div>
        </TodoTableHeader>
        <TodoContainer>
          <div
            className="py-[13px] px-[26px] bg-[#EB8F3B] text-white flex cursor-pointer sticky top-0 z-10"
            onClick={handleClickAddTodo}
          >
            <AddCircleIcon />
            <AddTodoButtonText>할 일을 추가해주세요</AddTodoButtonText>
          </div>
          {dummyTodos.map((todo) => (
            <TodoDetailItem key={todo.id} todo={todo} />
          ))}
        </TodoContainer>
      </main>
    </div>
  );
}

const TodoTableHeader = styled.div`
  background: rgba(235, 143, 59, 0.3);
`;

const TodoTableHeaderItem = styled.div`
  /* TODO 사분면에 따라 색 변하게 하기 */
  /* color: #ffd0a5; */ // FIXME: 너무 밝아서 글자가 안보여서 디자인 수정 요청했습니다
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const AddTodoButtonText = styled.div`
  position: sticky;
  top: 0;
  margin-left: 16px;
  color: white;
  /* 본문_16_medium */
  /* font-family: Pretendard; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const TodoContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
