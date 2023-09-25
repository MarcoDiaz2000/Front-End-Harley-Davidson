import API from '../api';

export const FETCH_MOTORCYCLES = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_MOTORCYCLES';
export const CREATE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/CREATE_MOTORCYCLE';
export const DELETE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/DELETE_MOTORCYCLE';
export const FETCH_MOTORCYCLE_BY_ID = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_MOTORCYCLE_BY_ID';
export const UPDATE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/UPDATE_MOTORCYCLE';
export const MARK_MOTORCYCLE_AS_REMOVED = 'BOOK-APPOINTMENT/MOTORCYCLES/MARK_MOTORCYCLE_AS_REMOVED';
export const RECOVER_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/RECOVER_MOTORCYCLE';

export const fetchMotorcycles = () => (dispatch) => {
  API.getItems((response) => {
    dispatch({
      type: FETCH_MOTORCYCLES,
      payload: response.data,
    });
  });
};

export const createMotorcycle = (motorcycle) => (dispatch) => {
  API.createItem(motorcycle, (response) => {
    dispatch({
      type: CREATE_MOTORCYCLE,
      payload: response.data,
    });
  });
};

export const deleteMotorcycle = (id) => (dispatch) => {
  API.deleteItemById(id, (response) => {
    dispatch({
      type: DELETE_MOTORCYCLE,
      payload: id,
      message: response.data,
    });
  });
};

export const fetchMotorcycleById = (id) => (dispatch) => {
  API.getItemById(id, (response) => {
    dispatch({
      type: FETCH_MOTORCYCLE_BY_ID,
      payload: response.data,
    });
  });
};

export const updateMotorcycle = (id, updatedMotorcycle) => (dispatch) => {
  API.updateItemById(id, updatedMotorcycle, (response) => {
    dispatch({
      type: UPDATE_MOTORCYCLE,
      payload: response.data,
    });
  });
};

export const markMotorcycleAsRemoved = (id) => (dispatch) => {
  API.markItemAsRemoved(id, (response) => {
    dispatch({
      type: MARK_MOTORCYCLE_AS_REMOVED,
      payload: id,
      message: response.data,
    });
  });
};

export const recoverMotorcycle = (id) => (dispatch) => {
  API.recoverItemById(id, (response) => {
    dispatch({
      type: RECOVER_MOTORCYCLE,
      payload: id,
      message: response.data,
    });
  });
};

const initialState = {
  motorcycles: [],
  selectedMotorcycle: null,
};

const motorcyclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return {
        ...state,
        motorcycles: action.payload,
      };
    case CREATE_MOTORCYCLE:
      return {
        ...state,
        motorcycles: [...state.motorcycles, action.payload],
      };
    case DELETE_MOTORCYCLE:
      return {
        ...state,
        motorcycles: state.motorcycles.filter((motorcycle) => motorcycle.id !== action.payload),
      };
    case FETCH_MOTORCYCLE_BY_ID:
      return {
        ...state,
        selectedMotorcycle: action.payload,
      };
    case UPDATE_MOTORCYCLE:
      return {
        ...state,
        motorcycles: state.motorcycles.map((motorcycle) => (
          motorcycle.id === action.payload.id
            ? action.payload
            : motorcycle
        )),
      };

    case RECOVER_MOTORCYCLE:
      return {
        ...state,
        motorcycles: state.motorcycles.map((motorcycle) => (
          motorcycle.id === action.payload
            ? { ...motorcycle, removed: false }
            : motorcycle)),
      };

    case MARK_MOTORCYCLE_AS_REMOVED:
      return {
        ...state,
        motorcycles: state.motorcycles.map((motorcycle) => (
          motorcycle.id === action.payload
            ? { ...motorcycle, removed: true }
            : motorcycle
        )),
      };
    default:
      return state;
  }
};

export default motorcyclesReducer;
