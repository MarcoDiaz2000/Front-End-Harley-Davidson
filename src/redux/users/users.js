import API from '../api';

// Definición de tipos de acción
export const FETCH_USERS = 'BOOK-APPOINTMENT/USERS/FETCH_USERS';
export const CREATE_USER = 'BOOK-APPOINTMENT/USERS/CREATE_USER';
export const FETCH_SINGLE_USER = 'BOOK-APPOINTMENT/USERS/FETCH_SINGLE_USER';
export const DELETE_USER = 'BOOK-APPOINTMENT/USERS/DELETE_USER';

// Acciones
export const fetchUsers = () => (dispatch) => {
  API.getUsers((response) => {
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    });
  });
};

export const createUser = (username) => (dispatch) => {
  API.createUser(username, (response) => {
    dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
  });
};

export const fetchSingleUser = (userId) => (dispatch) => {
  API.getUserById(userId, (response) => {
    dispatch({
      type: FETCH_SINGLE_USER,
      payload: response.data,
    });
  });
};

export const deleteUser = (userId) => (dispatch) => {
  API.deleteUser(userId, (response) => {
    dispatch({
      type: DELETE_USER,
      payload: userId,
      message: response.data,
    });
  });
};

// Estado inicial
const initialState = {
  users: [],
  selectedUser: null,
};

// Reductor
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case FETCH_SINGLE_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
