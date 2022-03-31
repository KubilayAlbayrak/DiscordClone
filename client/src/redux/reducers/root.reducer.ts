import { combineReducers } from 'redux';

import { userDefaultState, userReducer as userState } from '../reducers';

import { ROOT_RESET_REDUCER_STATE_TO_DEFAULT } from '../redux-types';

const appReducer = combineReducers({
  userState,
});

const defaultState = {
  userState: { ...userDefaultState },
};

export const rootReducer = (state: any, action: any) => {
  if (action.type === ROOT_RESET_REDUCER_STATE_TO_DEFAULT) {
    return appReducer(defaultState, action as any);
  }

  return appReducer(state, action);
};
