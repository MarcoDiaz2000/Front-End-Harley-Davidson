import API from '../api';

export const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';
export const CREATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/CREATE_RESERVATION';
export const DELETE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/DELETE_RESERVATION';
export const FETCH_SINGLE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_SINGLE_RESERVATION';
export const UPDATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/UPDATE_RESERVATION';
export const CONFIRM_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/CONFIRM_RESERVATION';

export const fetchReservations = (userId) => (dispatch) => {
  API.getReservationsForUser(userId, (response) => {
    dispatch({
      type: FETCH_RESERVATIONS,
      payload: response.data,
    });
  });
};

export const createReservation = (reservation) => (dispatch) => {
  API.createReservation(reservation, (response) => {
    dispatch({
      type: CREATE_RESERVATION,
      payload: response.data,
    });
  });
};

export const deleteReservation = (id) => (dispatch) => {
  API.deleteReservationById(id, (response) => {
    dispatch({
      type: DELETE_RESERVATION,
      payload: id,
      message: response.data,
    });
  });
};

export const fetchSingleReservation = (id) => (dispatch) => {
  API.getReservationById(id, (response) => {
    dispatch({
      type: FETCH_SINGLE_RESERVATION,
      payload: response.data,
    });
  });
};

export const updateReservation = (id, updatedReservation) => (dispatch) => {
  API.updateReservationById(id, updatedReservation, (response) => {
    dispatch({
      type: UPDATE_RESERVATION,
      payload: updatedReservation,
      id,
      message: response.data,
    });
  });
};

export const confirmReservation = (id) => (dispatch) => {
  API.confirmReservation(id, (response) => {
    dispatch({
      type: CONFIRM_RESERVATION,
      payload: id,
      message: response.data,
    });
  });
};

const initialState = {
  reservations: [],
  selectedReservation: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    case CREATE_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case DELETE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
      };
    case FETCH_SINGLE_RESERVATION:
      return {
        ...state,
        selectedReservation: action.payload,
      };
    case UPDATE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.map((reservation) => (
          reservation.id === action.id
            ? action.payload
            : reservation
        )),
      };

    case CONFIRM_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.map((reservation) => (
          reservation.id === action.payload
            ? { ...reservation, confirmed: true }
            : reservation
        )),
      };
    default:
      return state;
  }
};

export default reservationsReducer;
