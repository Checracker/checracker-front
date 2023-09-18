export async function POST() {
  return new Response("로그아웃 성공", {
    headers: {
      "Set-Cookie": "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
    },
  });
}
