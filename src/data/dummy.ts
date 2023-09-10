export type User = {
  id: number;
  name?: string;
  email: string;
  password: string;
  avatar?: string;
  boardIds?: string[];
};

export const signedInUsers: User[] = [
  {
    id: 1,
    name: "Tony",
    email: "gth1123@naver.com",
    password: "asdf1234",
    avatar: "https://avatars.githubusercontent.com/u/58352248?v=4",
    boardIds: [],
  },
  {
    id: 2,
    name: "Eloe",
    email: "bananana0118@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/28006318?v=4",
    password: "asdf1234",
  },
  {
    id: 3,
    name: "예린",
    email: "effirin8@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/101503543?v=4",
    password: "asdf1234",
  },
  {
    id: 4,
    name: "햄찌",
    email: "tjdwls0129@naver.com",
    avatar:
      "https://ca.slack-edge.com/T02KJKFEGQ7-U054K0RG6C9-f6070fcccfb9-512",
    password: "asdf1234",
  },
];
