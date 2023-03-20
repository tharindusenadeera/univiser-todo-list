import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export const TodoRow = ({ Icon, mainTxt, color }) => {
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      {Icon && (
        <Grid item>
          <Icon
            sx={{
              width: "20px",
              height: "20px",
              color: color,
              background: `${color}3d`,
              borderRadius: "30px",
              padding: "9px 10px",
              
            }}
            size="small"
          />
        </Grid>
      )}
      <Grid item xs={24} style={{ textAlign: "left" }}>
        <Grid item xs={24} component="div">
          <div style={{ overflow: "hidden", textOverflow: "ellipsis", fontSize: '20px' }}>
            {mainTxt}
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
};
