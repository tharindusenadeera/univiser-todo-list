import { Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { TodoRow } from "./TodoRow";
import { useLocation } from "react-router-dom";
import { PreviewItem } from "./PreviewItem";

const PreviewTodo = () => {
  const location = useLocation();
  
  return (
    <div className="full-width full-height margin-10">
      <Header title="Todo List" description="Added List of Todos ..." />
      <Grid container mt={5}>
        {location?.state?.map((item, key) => {
          return (
            <Grid item xs={10}>
              <PreviewItem key={key} itemObj={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PreviewTodo;
