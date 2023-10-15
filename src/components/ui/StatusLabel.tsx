import { TODO_STATUS, TODO_STATUS_LABEL } from "@/constants/todo";
import { TodoStatus } from "@/types/todo";

type Props = {
  status: TodoStatus;
};
export default function StatusLabel({ status }: Props) {
  const getStatusText = (status: TodoStatus) => {
    switch (status) {
      case TODO_STATUS.TO_DO:
        return TODO_STATUS_LABEL.TO_DO;
      case TODO_STATUS.IN_PROGRESS:
        return TODO_STATUS_LABEL.IN_PROGRESS;
      default:
        return TODO_STATUS_LABEL.DONE;
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
