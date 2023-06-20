import { React, useState } from "react";
import { Link } from "react-router-dom";
//import {v4 as uuidv4} from 'uuid';

export default function Navbar() {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    } //trim이란 text의 여백을 없애버림
    //onAdd({ id: uuidv4(), text });
    setText("");
  };
  return (
    <nav>
      <Link to="/">Youtube</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button >Add</button>
      </form>
    </nav>
  );
}
