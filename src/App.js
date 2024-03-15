import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, FormControl, Container, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), phoneNumber, email };
    setTodos([...todos, newTodo]);
    setPhoneNumber("");
    setEmail("");
    console.log(newTodo);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div  style={{marginTop:35}}>
      <Container maxWidth="sm">
        <form>
          <FormControl fullWidth={true}>
            <TextField
            type='number'
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={true}
              style={{marginTop:35}}
            />
            <TextField
            type='email'
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              style={{marginTop:35}}
            />
            <Button 
            variant="contained" 
            color="primary" 
            style={{marginTop:35}}
            onClick={handleAddTodo}>
              Add Todo
            </Button>
            <List>
              {todos.map((todo) => (
                <ListItem key={todo.id}>
                  <ListItemText
                    style={{ backgroundColor: "green", padding: 20 }}
                    primary={`Phone Number: ${todo.phoneNumber}`}
                    secondary={ `Email: ${todo.email}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      style={{ backgroundColor: "red", padding: 20 }}
                      aria-label="delete"
                      onClick={() => handleDeleteTodo(todo.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default App;
