import React, { useState } from "react";
import "./ToDoApp.css";

function ToDoApp() {
  const [items, setItems] = useState(["장보기", "공부하기"]);
  return (
    <div className="ToDoApp">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
