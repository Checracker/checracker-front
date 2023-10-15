"use client";

import { appRoutes } from "@/constants/appRoutes";
import useAuth from "@/hooks/useAuth";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href={appRoutes.login}>
        <Button variant="contained">login</Button>
      </Link>
      <span>
        <Button variant="contained" onClick={() => logout()}>
          logout
        </Button>
      </span>
      <div>
        <Link href={appRoutes.quadrant(12, 1)}>
          <Button variant="contained">go to quadrant page</Button>
        </Link>
      </div>
    </div>
  );
}
