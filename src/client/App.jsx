import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { light } from './themes';

const styles = theme => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={light}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Files
        </Typography>
      </Toolbar>
    </AppBar>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
