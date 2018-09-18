import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { light } from './themes';

import Navbar from './components/Navbar';
import Files from './components/Files';
import { Actions as FilesActions } from './modules/files';

const styles = theme => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
    },
  },
});

class App extends React.Component {
  componentDidMount() {
    const { fetchFiles } = this.props;
    fetchFiles();
  }

  render() {
    return (
      <MuiThemeProvider theme={light}>
        <Navbar />
        <Files />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  fetchFiles: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchFiles: (path = '', filter = {}) => { dispatch(FilesActions.fetchFiles(path, filter)); },
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
