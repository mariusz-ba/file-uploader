import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloudUpload from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  input: {
    display: 'none',
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  onUpload: PropTypes.func.isRequired,
};

const Navbar = ({ classes, onUpload }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography
        variant="title"
        color="inherit"
        style={{ flexGrow: 1 }}
      >
        Files
      </Typography>
      <label htmlFor="upload-button">
        <input
          id="upload-button"
          type="file"
          accept="*"
          className={classes.input}
          onChange={onUpload}
        />
        <IconButton component="span" color="inherit">
          <CloudUpload />
        </IconButton>
      </label>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = propTypes;

export default withStyles(styles)(Navbar);
