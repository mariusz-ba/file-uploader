import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/SaveAlt';

const propTypes = {
  file: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    directory: PropTypes.bool.isRequired,
  }).isRequired,
  onDownload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

class File extends Component {
  onDownload = () => {
    const { file, onDownload } = this.props;
    onDownload(file.fullname);
  }

  onDelete = () => {
    const { file, onDelete } = this.props;
    onDelete(file.fullname);
  }

  render() {
    const { file } = this.props;

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {file.directory === true && (
              <FolderIcon />
            )}
            {file.directory === false && (
              <FileIcon />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={file.fullname} />
        <ListItemSecondaryAction>
          <IconButton onClick={this.onDownload}>
            <DownloadIcon />
          </IconButton>
          <IconButton onClick={this.onDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

File.propTypes = propTypes;

export default File;