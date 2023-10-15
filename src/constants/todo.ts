export const TODO_STATUS = {
  TO_DO: "TO_DO",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
} as const;

export const TODO_STATUS_LABEL = {
  [TODO_STATUS.TO_DO]: "이슈사항",
  [TODO_STATUS.IN_PROGRESS]: "진행중",
  [TODO_STATUS.DONE]: "",
} as const;
