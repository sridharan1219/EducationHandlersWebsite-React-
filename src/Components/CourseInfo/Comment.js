import React, { useEffect, useState } from "react";
import axios from "axios";

const BasicCrud = () => {
  const [tododata1, setToDoData1] = useState([]);
  const [inputvalue, setInputValue] = useState();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log('tododata1 ===========>>>>>', response)
        setToDoData1(response.data);
      });
  }, []);

  const handleClick = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", {
        body: inputvalue,
      })
      .then((response) => {
        console.log(response.data);
        setToDoData1([...tododata1, response.data]);
        setInputValue("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    setToDoData1(tododata1.filter((task) => task.id != id));
  };
  return (
    <div>
      <h1>Comment / Reviews</h1>
      <input onChange={handleInput} value={inputvalue}></input>
      <button onClick={handleClick}>Add</button>
      {Array.isArray(tododata1) &&
        tododata1.map((index) => (
          <div key={index.id}>
            <p>{index.body}</p>
            <button onClick={() => handleDelete(index.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default BasicCrud;
