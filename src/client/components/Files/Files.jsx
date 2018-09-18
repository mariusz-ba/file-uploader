import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    directory: PropTypes.bool.isRequired,
  })).isRequired,
};

const Files = ({ files }) => (
  <ul>
    {files.map(file => (
      <li key={file.fullname}>{file.name}</li>
    ))}
  </ul>
);

Files.propTypes = propTypes;

export default Files;
