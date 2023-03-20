import React, { useState } from "react";
import { Grid, Checkbox } from "@mui/material";
import { TodoRow } from "./TodoRow";
import { AiFillEdit } from "react-icons/ai";
import {
  IoCheckmarkDoneSharp,
  IoClose,
  IoAlertCircleOutline,
} from "react-icons/io5";

export const PreviewItem = ({ key, itemObj }) => {
  return (
    <Grid
      container
      alignItems="center"
      className="row_list_item"
      p={2}
      key={key}
    >
      <Grid container className="full-width" alignItems="center" spacing={2}>
        <Grid item xs={7}>
          <TodoRow
            mainTxt={itemObj?.description}
            color={itemObj?.done ? "#39a21a" : "#ff1b1b"}
          />
        </Grid>
        <Grid item xs={3}>
          <TodoRow
            Icon={itemObj?.done ? IoCheckmarkDoneSharp : IoAlertCircleOutline}
            mainTxt={itemObj?.done ? "Done" : "Pending"}
            color={itemObj?.done ? "#39a21a" : "#ff1b1b"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
