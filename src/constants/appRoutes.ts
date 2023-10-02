export const appRoutes = {
  home: "/",
  login: "/login",
  signup: "/signup",
  board: "/board",
  quadrant: (boardId: number, quadrantId: number) =>
    `/board/${boardId}/quadrant/${quadrantId}`,
};
