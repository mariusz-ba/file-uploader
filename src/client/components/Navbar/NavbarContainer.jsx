import React, { Component } from 'react';
import get from 'lodash/get';
import Navbar from './Navbar';

class NavbarContainer extends Component {
  onUpload = (e) => {
    const files = get(e, 'target.files', []);
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      const filename = files[i].name;
      data.append(filename, files[i]);
    }

    // TODO: handle uploading
  }

  render() {
    return (
      <Navbar onUpload={this.onUpload} />
    );
  }
}

export default NavbarContainer;
