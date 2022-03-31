import { ROOT_RESET_REDUCER_STATE_TO_DEFAULT } from '../redux-types';

export const resetReducerStatesToDefault = () => {
  return {
    type: ROOT_RESET_REDUCER_STATE_TO_DEFAULT,
    payload: undefined,
  };
};
