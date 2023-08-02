type Todo = {
  id: number;
  columnId: number;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: string;
  startDate: string;
  targetDate: string;
  alarm: boolean;
};

type TodoStatus = "todo" | "doing" | "done";

type TodoColumn = {
  id: number;
  title: string;
  todos: Todo[];
};

type BoardCommon = {
  id: number;
  title: string;
  columns: TodoColumn[];
};

type QuadrantBoard = BoardCommon & {
  type: "quadrant";
};

type Board = QuadrantBoard;
