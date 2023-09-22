import { signedInUsers } from "@/data/dummy";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const user = signedInUsers.find((user) => user.email === email);

  if (!user) {
    return NextResponse.json({ isSignedIn: false }, { status: 200 });
  }

  return NextResponse.json({ isSignedIn: true }, { status: 200 });
}
