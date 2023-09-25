import { GetAllQuadrantTodoData, Todo } from "./todo";

type ApiResponse<T> = {
  code: string;
  message: string;
  data: T;
};

// {{baseUrl}}/v1/todo/main?userId=:userId
export type GetAllQuadrantTodoResponse = ApiResponse<GetAllQuadrantTodoData>;

// {{baseUrl}}/v1/todo/:boardId/:quadrant?userId=:userId&sort=:sort
export type GetQuadrantTodoResponse = ApiResponse<Todo[]>;
