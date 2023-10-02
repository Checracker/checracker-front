"use client";

import QuadrantTitle from "@/components/ui/quadrant/QuadrantTitle";
import { appRoutes } from "@/constants/appRoutes";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import CloseRound from "@/components/ui/icons/CloseRound";

export default function QuadrantPage() {
  const { quadrantId } = useParams();

  if (!(quadrantId >= "1" && quadrantId <= "4")) {
    redirect(`${appRoutes.board}`);
  }

  return (
    <div className="h-full">
      <header className="py-4 px-[29px] bg-slate-900 flex justify-between items-center">
        <div>
          <QuadrantTitle quadrant={Number(quadrantId)} />
          {/* todo: select box */}
        </div>
        <Link href={appRoutes.board}>
          <CloseRound />
        </Link>
      </header>
      <main>{/* todo 그리드로 영역 나눠서 레이아웃 잡기 */}</main>
    </div>
  );
}
