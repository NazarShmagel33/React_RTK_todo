import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex w-52 items-center justify-center gap-4 bg-slate-300 p-2 text-center">
      <input
        type="checkbox"
        className="border-1 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span className="text-2xl font-black uppercase">{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
          alt="close"
          className="w-8 cursor-pointer"
        />{" "}
      </span>
    </li>
  );
};

export default TodoItem;
