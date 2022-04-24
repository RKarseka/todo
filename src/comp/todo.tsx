import classNames from 'classnames';
import { removeTaskFn, Task } from '../interfaces/interfaces';

interface Props {
  todo: Task;
  toggleTask: removeTaskFn;
  removeTask: removeTaskFn;
}

export const Todo: React.FC<Props> = ({ removeTask, toggleTask, todo }) => {
  return (
    <div className="item-todo" onClick={() => toggleTask(todo.id)}>
      <div className={classNames('item-text', todo.completed && 'strike')}>
        {todo.title}
      </div>
      <div
        className="item-delete"
        onClick={(e) => {
          e.stopPropagation();
          removeTask(todo.id);
        }}
      >
        x
      </div>
    </div>
  );
};
