import { Todo } from "@/types/todo";
import { CheckBox } from "@mui/icons-material";
import StatusLabel from "./ui/StatusLabel";
import styled from "@emotion/styled";
import Image from "next/image";
import DatePicker from "./ui/DatePicker";

type Props = {
  todo: Todo;
};
export default function TodoDetailItem({ todo }: Props) {
  return (
    <div className="px-4 py-[9px] flex items-center justify-between">
      <div className="flex items-center">
        <CheckBox />
        <div className="flex gap-3 px-[9px] items-center">
          <div>bell</div>
          <Title>{todo.title}</Title>
          <StatusLabel status={todo.status} />
        </div>
      </div>
      <div>
        <div className="inline-flex gap-[10px]">
          <DatePicker />
          <DatePicker className="bg-[#F0E7FF]" />
          <DatePicker className="bg-[#E7F2FF]" />
        </div>
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
