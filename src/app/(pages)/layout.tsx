import { appRoutes } from "@/constants/appRoutes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userCooie = cookies().get("user");
  const user = userCooie?.value;

  if (!user) {
    return redirect(appRoutes.login);
  }
  return <>{children}</>;
}
