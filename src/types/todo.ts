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

export type TodoStatus = "TO_DO" | "IN_PROGRESS" | "DONE";

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
  startDate: string; // YYYY-MM-DD
  targetDate: string;
  endDate: string;
  contents: string;
  isAlarmed: boolean;
  childTodo?: Todo[];
}
