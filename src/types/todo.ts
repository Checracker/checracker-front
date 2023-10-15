import { TODO_STATUS } from "@/constants/todo";

export interface GetAllQuadrantTodoData {
  board: Board;
  todo: AllQuadrantTodo;
}

export interface Board {
  id: number;
  name: string;
}

export interface AllQuadrantTodo {
  "1": Todo[];
  "2": Todo[];
  "3": Todo[];
  "4": Todo[];
}

export type TodoStatus =
  | typeof TODO_STATUS.TO_DO
  | typeof TODO_STATUS.IN_PROGRESS
  | typeof TODO_STATUS.DONE;

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
  startDate?: string; // YYYY-MM-DD
  targetDate?: string;
  endDate?: string;
  contents: string;
  isAlarmed: boolean;
  childTodo?: Todo[];
}
