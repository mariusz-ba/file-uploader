import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions as FilesActions } from '@modules/files';
import get from 'lodash/get';
import Navbar from './Navbar';

const propTypes = {
  uploadFiles: PropTypes.func.isRequired,
};

class NavbarContainer extends Component {
  onUpload = (e) => {
    const files = get(e, 'target.files', []);
    this.props.uploadFiles(files);
  }

  render() {
    return (
      <Navbar onUpload={this.onUpload} />
    );
  }
}

NavbarContainer.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    uploadFiles: (files = [], path = '') => { dispatch(FilesActions.uploadFiles(path, files)); },
  };
}

export default connect(null, mapDispatchToProps)(NavbarContainer);
