import React from "react";

import {
  Card,
  CardContent,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";

import "./style.css";

const Container = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              textAlign="center"
              width="100%"
            >
              Github PR Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="container">
        <Card className="card">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography gutterBottom variant="h5">
              Merged
            </Typography>
          </Stack>
          <CardContent className="cardContent">
            {/* PRs to be displayed here */}
          </CardContent>
        </Card>
        <Card className="card">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography gutterBottom variant="h5">
              In Review
            </Typography>
          </Stack>
          <CardContent className="cardContent">
            {/* PRs to be displayed here */}
          </CardContent>
        </Card>
        <Card className="card">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography gutterBottom variant="h5">
              Assigned
            </Typography>
          </Stack>
          <CardContent className="cardContent">
            {/* PRs to be displayed here */}
          </CardContent>
        </Card>
        <Card className="card">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography gutterBottom variant="h5">
              Open
            </Typography>
          </Stack>
          <CardContent className="cardContent">
            {/* PRs to be displayed here */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Container;
