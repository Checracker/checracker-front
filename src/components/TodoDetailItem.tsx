import { Todo, TodoStatus } from "@/types/todo";
import StatusLabel from "./ui/StatusLabel";
import styled from "@emotion/styled";
import Image from "next/image";
import DatePicker from "./ui/DatePicker";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import CheckBoxCracker from "./ui/CheckBoxCracker";
import { useState } from "react";
import dayjs from "dayjs";

type Props = {
  todo: Todo;
};
export default function TodoDetailItem({ todo }: Props) {
  const [endDate, setEndDate] = useState<string | undefined>(todo.endDate);
  const [status, setStatus] = useState<TodoStatus>(todo.status);
  const handleClickCheckBox = (checked: boolean) => {
    if (checked) {
      setEndDate(dayjs().format("YYYY-MM-DD"));
      setStatus("DONE");
    } else {
      setEndDate(undefined);
      setStatus(todo.status);
    }
  };

  const handleChangeEndDate = (date?: string) => {
    setEndDate(date);
  };

  return (
    <div className="px-4 py-[9px] flex items-center justify-between">
      <div className="flex items-center">
        <CheckBoxCracker checked={!!endDate} onChange={handleClickCheckBox} />
        <div className="flex gap-3 px-[9px] items-center">
          {todo.isAlarmed ? (
            <Image
              src="/images/Bell.svg"
              width={24}
              height={24}
              alt="alarm on"
            />
          ) : (
            <NotificationsOffOutlinedIcon />
          )}

          <Title>{todo.title}</Title>
          <StatusLabel status={status} />
        </div>
      </div>
      <div className="inline-flex gap-[10px]">
        <DatePicker date={todo.startDate} />
        <DatePicker className="bg-[#F0E7FF]" date={todo.targetDate} />
        <DatePicker
          className="bg-[#E7F2FF]"
          date={endDate}
          onChange={handleChangeEndDate}
          maxDate={dayjs().format("YYYY-MM-DD")}
        />
        <Image
          className="inline-block cursor-pointer"
          src="/images/CloseRoundDuotone.svg"
          width={24}
          height={24}
          alt="close"
        />
      </div>
    </div>
  );
}

const Title = styled.h3`
  color: #1d1a1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
