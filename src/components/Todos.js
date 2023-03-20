import React, { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  IconButton,
  OutlinedInput,
  FormControl,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { addTodos, completeTodos } from "../redux/reducer";
import { Header } from "./Header";
import { GoPlus } from "react-icons/go";
import { TodoItem } from "./TodoItem";
import { useNavigate } from "react-router-dom";

const Todos = (props) => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");

  // Add todo
  const handleAdd = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        description: todo,
        done: false,
      });
      setTodo("");
    }
  };

  // Text box onChange
  const handleOnChange = (event) => {
    setTodo(event.target.value);
  };

  // Status update of todo
  const statusUpdate = (itemId, itemObj) => {
    props.completeTodo(itemId);
  };

  // Route to preview page
  const handleRoute = (items) => {
    navigate('/list', { state: items });
  };

  return (
    <div className="full-width full-height margin-10">
      <Grid container>
        <Grid item xs={10}>
          <Header title="Todo App" description="Add your Todos Here ..." />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => handleRoute(props.todos)}>Preview</Button>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item xs={10}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Add Todo"
              size="small"
              onChange={handleOnChange}
            />
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={handleAdd}
          >
            <GoPlus />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container className="inner-component-height">
        <Stack spacing={1} m={1} className="full-width">
          {props?.todos?.length > 0 ? (
            props.todos.map((item, key) => {
              return (
                <TodoItem
                  itemObj={item}
                  handleChecked={statusUpdate}
                  key={key}
                />
              );
            })
          ) : (
            <></>
          )}
        </Stack>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
