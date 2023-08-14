import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('')
    } else {
      setMessage('please add item')
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." value={title} onChange={handleChange} />
        <FontAwesomeIcon className="input-submit" icon={faCirclePlus} />
      </form>
      <span className="submit-warning">{message}</span>
    </>
  )
};

export default InputTodo;