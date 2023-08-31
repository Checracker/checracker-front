interface ErrorTextProps {
  error: string;
}
export default function ErrorText({ error }: ErrorTextProps) {
  return <div className="text-[#C13F38] pt-[5px] px-2">{error}</div>;
}
