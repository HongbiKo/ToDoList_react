import React, { useState } from 'react';
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '123', text: '장보기', status: 'active'},
    {id: '124', text: '공부하기', status: 'active'},
  ]);

  const handleAdd = (todo) => {
    setTodos(todos.concat(todo));
  }

  return (
    <section>
      <ul>
        {
          todos.map(item => <li key={item.id}>{item.text}</li>)
        }
      </ul>
      <TodoForm onAdd={handleAdd}/>
    </section>
  );
}

