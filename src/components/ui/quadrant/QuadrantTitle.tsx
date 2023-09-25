"client";

import { useMemo } from "react";
import QuadrantNumber from "./QuadrantNumber";
import classNames from "classnames";

type Props = {
  quadrant: number;
};
export default function QuadrantTitle({ quadrant }: Props) {
  const quadrantTitle = useMemo(() => {
    switch (quadrant) {
      case 1:
        return {
          text: "중요O 긴급O",
          colorClass: "text-quadrant-1-title-color",
        };
      case 2:
        return {
          text: "중요O 긴급X",
          colorClass: "text-quadrant-2-title-color",
        };
      case 3:
        return {
          text: "중요X 긴급O",
          colorClass: "text-quadrant-3-title-color",
        };
      default:
        return {
          text: "중요X 긴급X",
          colorClass: "text-quadrant-4-title-color",
        };
    }
  }, [quadrant]);

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <QuadrantNumber quadrant={quadrant} />
      <h1
        className={classNames(
          quadrantTitle.colorClass,
          "text-[24px] leading-normal font-semibold",
        )}
      >
        {quadrantTitle.text}
      </h1>
    </div>
  );
}
