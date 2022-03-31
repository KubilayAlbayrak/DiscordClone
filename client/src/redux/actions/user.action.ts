import { USER_SET_INFORMATIONS } from '../redux-types';

export const setInformation = (userPayload: any) => {
  return {
    type: USER_SET_INFORMATIONS,
    payload: userPayload,
  };
};
