import './App.css';
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './todo';

function App() {

  const [todos, setTodos] = useState([]);

  const [todoInput, setTodoInput] = useState("")

  useEffect(() => {
    getTodos();

  }, []);

  function getTodos(){
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos
      (querySnapshot.docs.map((doc) => ({
        id : doc.id,
        todo : doc.data().todo,
        inprogress : doc.data().inprogress,
      }))
      );

    })

  }

  function addTodo(e){
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      todo : todoInput,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),

    })
    setTodoInput("");

  }

  return (
    <div className="App">
    <h1>ToDo app</h1>
    <form style={{alignItems: "baseline", justifyContent: "center", display: "flex", marginBottom: "40px"}}>
      
      <TextField
      id="standard-basic"
      label="write a todo"
      value={todoInput}
      onChange={(e) => setTodoInput(e.target.value)}
      style={{width:"350px", marginLeft: "10px"}}
      />
      <Button style={{marginLeft: "10px", marginRight: "10px"}} type="submit" variant="contained" color="primary" onClick={addTodo}>
       primary
      </Button>
      </form> 

      {todos.map((todo) => (
      <TodoListItem
      todo={todo.todo}
      inprogress={todo.inprogress}
      id={todo.id}
      />
      ))}
    </div>
  );
}

export default App;
