import { useState } from 'react';
import { addTaskFn } from '../interfaces/interfaces';

interface Props {
  addTask: addTaskFn;
}

export const TodoForm: React.FC<Props> = ({ addTask }) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleSubmit: React.ReactEventHandler = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.target.value);
  };

  // const handleKeyPress: React.ReactEventHandler = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        // onKeyDown={handleKeyPress}
        placeholder="Enter value..."
      />

      <button>Save</button>
    </form>
  );
};
