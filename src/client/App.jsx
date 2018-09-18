import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { light } from './themes';

import Navbar from './components/Navbar';
import Files from './components/Files';
import { Actions as FilesActions } from './modules/files';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
    },
  },
  card: {
    marginTop: 40,
    width: '83.3333%',
    maxWidth: 1440,
    margin: '0 auto',
  },
  ['@media screen and (max-width: 768px)']: {
    card: {
      marginTop: 0,
      width: '100%',
      borderRadius: 0,
    },
  },
});

class App extends React.Component {
  componentDidMount() {
    const { fetchFiles } = this.props;
    fetchFiles();
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={light}>
        <Navbar />
        <Card className={classes.card}>
          <CardContent>
            <Files />
          </CardContent>
        </Card>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchFiles: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchFiles: (path = '', filter = {}) => { dispatch(FilesActions.fetchFiles(path, filter)); },
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
