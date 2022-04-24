export interface Task {
  completed?: boolean;
  id: number;
  title?: string;
  userId?: number;
}

export interface addTaskFn {
  (userInput: string): void;
}

export interface removeTaskFn {
  (id: number): void;
}

export interface handleToggleFn {
  (id: number): void;
}
