import { useState } from "react";

export default function Todo() {
  const [value, setValue] = useState([]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }
  return (
    <>
      <h1>Todo App</h1>
      <form>
        <label>タスクを入力してください</label>
        <input value={value} onChange={handleChange}/>
      </form>
    </>
  );
}
