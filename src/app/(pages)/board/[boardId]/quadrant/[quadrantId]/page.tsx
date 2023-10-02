"use client";

import QuadrantTitle from "@/components/ui/quadrant/QuadrantTitle";
import { appRoutes } from "@/constants/appRoutes";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import CloseRound from "@/components/ui/icons/CloseRound";
import { useState } from "react";
import SimpleSelect from "@/components/ui/SimpleSelect";
import classNames from "classnames";

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
  const [selectedTodoOrder, setSelectedTodoOrder] =
    useState<TodoOrderItem["value"]>(defaultTodoOrder);

  return (
    <div className="h-full">
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
      <main>{/* todo 그리드로 영역 나눠서 레이아웃 잡기 */}</main>
    </div>
  );
}
