import { apiKey } from '../config';

export const SET_API_TOKEN = '/store/api/setApiToken';
export const REMOVE_API_TOKEN = '/store/api/removeApiToken';
export const SET_API_EXPIRATION = '/store/api/setApiExpiration';
export const REMOVE_API_EXPIRATION = '/store/api/removeApiExpiration';

export const setApiToken = token => ({ type: SET_API_TOKEN, token });
export const removeApiToken = () => ({ type: REMOVE_API_TOKEN });
export const setApiExpiration = expirationDate => ({ type: SET_API_EXPIRATION, expirationDate});
export const removeApiExpiration = () => ({ type: REMOVE_API_EXPIRATION });

export default function reducer(state={}, action) {
    switch (action.type) {
        case SET_API_TOKEN: {
            const newState = {...state};
            //add the players info
            //assume NO player info exists, as this will wipe out the old players info
            newState.apiToken = action.token
            return newState;
        }
        case REMOVE_API_TOKEN: {
            const newState = { ...state };
            delete newState.apiToken;
            console.log("After removing players info, state: ", newState);
            return newState
        }
        case SET_API_EXPIRATION: {
            const newState = { ...state};
            newState.apiExpiration = action.expirationDate;
            return newState;
        }
        case REMOVE_API_EXPIRATION: {
            const newState = { ...state};
            delete newState.apiExpiration;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export const getApiToken = async () => {
    try {
      const response = await fetch(`https://project.trumedianetworks.com/api/token`, {
        method: 'get',
        //headers: { 'Content-Type': 'application/json', 'temptoken': `${apiToken}`, },
        headers: { 'Content-Type': 'application/json', 'apiKey': `${apiKey}` },
    });
      if (response.ok) {
        return await response.json();
      } else {
        throw(response.status)
      }
    } catch(e) {
      console.log("Error:  ", e);

    }
  }


