import { GET_REPOS } from '../actions/types';

const initialState = {
  repos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.data
      };
    default:
      return state;
  }
};

export default reducer;
