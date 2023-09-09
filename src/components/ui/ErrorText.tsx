import classNames from "classnames";

interface ErrorTextProps {
  error: string;
  className?: string;
}
export default function ErrorText({ error, className }: ErrorTextProps) {
  return (
    <div className={classNames("text-[#C13F38] pt-[5px] px-2", className)}>
      {error}
    </div>
  );
}
