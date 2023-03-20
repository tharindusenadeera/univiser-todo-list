import React, { useState } from "react";
import { Grid, Checkbox } from "@mui/material";
import { TodoRow } from "./TodoRow";
import { AiFillEdit } from "react-icons/ai";
import {
  IoCheckmarkDoneSharp,
  IoClose,
  IoAlertCircleOutline,
} from "react-icons/io5";

export const TodoItem = ({ key, itemObj, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleStatus = (event, id, item) => {
    setIsChecked(event.target.checked);
    if (event.target.checked === true) {
        handleChecked(itemObj?.id, itemObj);
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      className="row_list_item"
      p={2}
      key={key}
    >
      <Grid container className="full-width" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          {!itemObj?.done && (
            <Checkbox
              checked={isChecked}
              onChange={(event) => {
                handleStatus(event,itemObj?.id, itemObj)
              }}
            />
          )}
        </Grid>
        <Grid item xs={7}>
          <TodoRow
            mainTxt={itemObj?.description}
            color={isChecked ? "#39a21a" : "#ff1b1b"}
          />
        </Grid>
        <Grid item xs={3}>
          <TodoRow
            Icon={isChecked ? IoCheckmarkDoneSharp : IoAlertCircleOutline}
            mainTxt={isChecked ? "Done" : "Pending"}
            color={isChecked ? "#39a21a" : "#ff1b1b"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
