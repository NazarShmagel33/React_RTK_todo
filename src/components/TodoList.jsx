import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

  return (
    <ul className=' mt-5 list-none text-center  flex justify-center'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;