import { appRoutes } from "@/constants/appRoutes";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = cookies().get("user");

  if (user) {
    redirect(appRoutes.board, RedirectType.replace);
  }

  return <>{children}</>;
}
