import { ramettoOne } from "@/app/fonts";
import classNames from "classnames";
import { useMemo } from "react";

type Props = {
  quadrant: number;
};

export default function QuadrantNumber({ quadrant }: Props) {
  const color = useMemo(() => {
    switch (quadrant) {
      case 1:
        return {
          font: "text-quadrant-1-number-text",
          bg: "bg-quadrant-1-number-bg",
        };
      case 2:
        return {
          font: "text-quadrant-2-number-text",
          bg: "bg-quadrant-2-number-bg",
        };
      case 3:
        return {
          font: "text-quadrant-3-number-text",
          bg: "bg-quadrant-3-number-bg",
        };
      default:
        return {
          font: "text-quadrant-4-number-text",
          bg: "bg-quadrant-4-number-bg",
        };
    }
  }, [quadrant]);

  return (
    <div
      className={classNames(
        ramettoOne.className,
        color.font,
        color.bg,
        "py-2 w-9 h-9 rounded-[50%] flex justify-center items-center text-[24px] leading-normal",
      )}
    >
      {quadrant}
    </div>
  );
}
