import { TODO_STATUS } from "@/constants/todo";
import { TodoStatus } from "@/types/todo";

type Props = {
  status: TodoStatus;
};
export default function StatusLabel({ status }: Props) {
  const getStatusText = (status: TodoStatus) => {
    switch (status) {
      case TODO_STATUS.TO_DO:
        return "이슈사항";
      case TODO_STATUS.IN_PROGRESS:
        return "진행중";
      default:
        return "";
    }
  };
  if (status === TODO_STATUS.DONE) {
    return <></>;
  }
  return (
    <div
      className={`inline-block rounded-lg text-[14px] font-medium px-3 py-[6px] leading-5 text-white ${
        status === TODO_STATUS.TO_DO ? "bg-[#FF4040]" : "bg-[#FF8E25]"
      }`}
    >
      {getStatusText(status)}
    </div>
  );
}
