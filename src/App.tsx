import axios from 'axios';
import { useEffect, useState } from 'react';
import { Todo } from './comp/todo';
import { TodoForm } from './comp/todo-form';
import {
  addTaskFn,
  handleToggleFn,
  removeTaskFn,
  Task,
} from './interfaces/interfaces';

const PATH = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [todos, settodos] = useState<Task[]>([]);
  const maxId =
    todos.reduce((prev, item) => (prev > item.id ? prev : item.id), 0) + 1;

  useEffect(() => {
    (async () => {
      try {
        await axios.get(`${PATH}?_limit=6`).then(({ data }) => settodos(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(todos);

  const addTask: addTaskFn = (userInput) => {
    if (userInput) {
      const newItem: Task = {
        id: maxId,
        title: userInput,
        completed: false,
      };
      settodos((prev) => [...prev, newItem]);
    }
  };

  const removeTask: removeTaskFn = (id) => {
    settodos([...todos.filter((i) => i.id !== id)]);
  };

  const handleToggle: handleToggleFn = (id): void => {
    settodos([
      ...todos.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : { ...i }
      ),
    ]);
  };

  return (
    <div className="app">
      <header>
        <h1>The Todo</h1>
        <h2>List: {todos.length}</h2>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((item) => (
        <Todo
          key={item?.id}
          todo={item}
          toggleTask={handleToggle}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default App;
