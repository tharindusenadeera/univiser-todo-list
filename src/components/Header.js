import { Grid, Box } from "@mui/material";

export const Header = ({ title, description }) => {
  return (
    <Grid container>
      <Grid item>
        <Box className="screen-title-basic">{title}</Box>
        <Box className="screen-description-basic" mt={1}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};