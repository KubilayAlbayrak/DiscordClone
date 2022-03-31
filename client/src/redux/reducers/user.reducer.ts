import { USER_SET_INFORMATIONS } from '../redux-types';

export const userDefaultState = {
  id: undefined,
  name: undefined,
  password: undefined,
};

export const userReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case USER_SET_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
