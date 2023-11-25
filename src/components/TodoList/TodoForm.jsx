import React, { useState } from 'react';

export default function TodoForm({onAdd}) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
      setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: 'x', text, status: 'active'});
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input required type="text" name="todo" placeholder="Add Todo" value={text} onChange={handleChange}></input>
      <button>Add</button>
    </form>
  );
}

