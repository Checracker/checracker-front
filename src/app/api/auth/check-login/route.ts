import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookie = req.headers.get("Cookie");
  const user = cookie?.split(";").find((c) => c.trim().startsWith("user="));

  if (!user) {
    return NextResponse.json({ isLogin: false }, { status: 401 });
  }

  return NextResponse.json({ isLogin: true }, { status: 200 });
}
