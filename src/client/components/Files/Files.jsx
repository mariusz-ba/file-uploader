import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import File from './components/File';

const propTypes = {
  files: PropTypes.arrayOf(File.propTypes.file).isRequired,
  onDownload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const Files = ({ files, onDelete, onDownload }) => (
  <List>
    {files.map(file => (
      <File
        key={file.fullname}
        file={file}
        onDownload={onDownload}
        onDelete={onDelete}
      />
    ))}
  </List>
);

Files.propTypes = propTypes;

export default Files;
