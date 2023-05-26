import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div
      style={{
        background:
          'url("https://images.wallpaperscraft.ru/image/single/fon_piatna_raznotsvetnyj_242852_3840x2400.jpg")',
        height: "100vh",
      }}
    >
      <div
        className="container mx-auto flex flex-col justify-center text-center   "
        style={{
          height: "100vh",
        }}
      >
        <h1 className="p-2 text-3xl font-black uppercase text-white">
          Продукти
        </h1>
        <NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
