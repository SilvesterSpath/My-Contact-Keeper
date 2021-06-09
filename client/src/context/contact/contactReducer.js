import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((i) => i.id !== action.payload),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((i) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return i.name.match(regex) || i.email.match(regex);
        }),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};

export default contactReducer;
