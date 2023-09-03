import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href="/login">
        <Button variant="contained">login</Button>
      </Link>
    </div>
  );
}
