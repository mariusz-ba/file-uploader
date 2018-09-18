import { connect } from 'react-redux';
import get from 'lodash/get';
import Files from './Files';
import { Actions as FilesActions } from '@modules/files';
import API from '@modules/api';
import FileDownload from 'js-file-download';

function mapStateToProps(state) {
  return {
    files: get(state, 'files.files', []),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDownload: async (filename) => {
      const res = await API.downloadFile({ filename });
      FileDownload(res.data, filename);
    },
    onDelete: (filename) => {
      dispatch(FilesActions.deleteFile(filename));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);
