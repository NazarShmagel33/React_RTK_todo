const NewTodoForm = ({ value, updateText, handleAction }) => {
    return (
      <label className="flex justify-center gap-4 p-2">
        <input
          className="p-2 bg-slate-200 border-2 border-red-300"
          placeholer='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAction}>Добавити</button>
      </label>
    );
  };
  
  export default NewTodoForm;