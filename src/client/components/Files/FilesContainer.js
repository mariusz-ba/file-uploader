import { connect } from 'react-redux';
import get from 'lodash/get';
import Files from './Files';

function mapStateToProps(state) {
  return {
    files: get(state, 'files.files', []),
  };
}

export default connect(mapStateToProps)(Files);
