import API from '../api';

export const TYPES = {
  REQUEST_FILE: 'files/REQUEST_FILE',
  REQUEST_FILES: 'files/REQUEST_FILES',
  RECEIVE_FILE: 'files/RECEIVE_FILE',
  RECEIVE_FILES: 'files/RECEIVE_FILES',
  UPLOAD_START: 'files/UPLOAD_START',
  UPLOAD_SUCCESS: 'files/UPLOAD_SUCCESS',
  SET_ERRORS: 'files/SET_ERRORS',
};

export const setErrors = (errors = {}) => ({
  type: TYPES.SET_ERRORS,
  payload: errors,
});

// Fetching files
export const requestFiles = (path = '', filter = {}) => ({
  type: TYPES.REQUEST_FILES,
  payload: {
    path,
    filter,
  },
});

export const receiveFiles = (files = []) => ({
  type: TYPES.RECEIVE_FILES,
  payload: files,
});

export const fetchFiles = (path = '', filter = {}) => async (dispatch) => {
  dispatch(requestFiles(path, filter));
  try {
    const res = await API.getFiles({ path, filter });
    const files = res.data;
    dispatch(receiveFiles(files));
  } catch (e) {
    dispatch(setErrors(e.response.data));
  }
};

// Uploading files
export const uploadStart = (path = '', files = []) => ({
  type: TYPES.UPLOAD_START,
  payload: {
    path,
    files,
  },
});

export const uploadSuccess = (path = '', files = []) => ({
  type: TYPES.UPLOAD_SUCCESS,
  payload: {
    path,
    files,
  },
});

export const uploadFiles = (path = '', files = []) => async (dispatch) => {
  dispatch(uploadStart(path, files));
  try {
    await API.uploadFiles({ path, files });
    dispatch(uploadSuccess(path, files));
  } catch (e) {
    dispatch(setErrors(e.response.data));
  }
};
