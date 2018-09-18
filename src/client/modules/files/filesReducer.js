import { TYPES } from './filesActions';

const INITIAL_STATE = {
  isFetching: false,
  isUploading: false,
  files: [],
  errors: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.REQUEST_FILE:
    case TYPES.REQUEST_FILES:
      return { ...state, isFetching: true };
    case TYPES.RECEIVE_FILE:
      return {
        ...state,
        isFetching: false,
        errors: null,
        files: [payload],
      };
    case TYPES.RECEIVE_FILES:
      return {
        ...state,
        isFetching: false,
        errors: null,
        files: payload,
      };
    case TYPES.UPLOAD_START:
      return { ...state, isUploading: true };
    case TYPES.UPLOAD_SUCCESS:
      return {
        ...state,
        isUploading: false,
        files: [
          ...state.files,
          ...payload.files
        ]
      };
    case TYPES.SET_ERRORS:
      return {
        ...state,
        isFetching: false,
        isUploading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
