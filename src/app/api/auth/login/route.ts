import { signedInUsers } from "@/data/dummy";
import { NextRequest } from "next/server";

/**
 * 로그인 API
 */
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // 로그인 로직 임시 구현
  const user = signedInUsers.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    return new Response("로그인 실패", { status: 401 });
  }

  // 로그인 성공 시 쿠키에 user 정보 저장
  const cookie = `user=${user.email}; Secure; HttpOnly; Path=/;`;

  // TODO 응답 형식 만들기
  return new Response(JSON.stringify({ user }), {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
