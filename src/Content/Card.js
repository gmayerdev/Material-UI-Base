import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px"
}));

export default function Card() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
            gap: 2
          }}
        >
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
          <Item key={4} elevation={4}>
            {`elevation=${4}`}
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
}
