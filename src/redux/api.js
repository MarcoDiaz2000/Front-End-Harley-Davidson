import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

const API = {
  // Users Controller
  getUsers: (success) => {
    axios.get(`${baseURL}/users`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },
  createUser: (username, success) => {
    axios.post(`${baseURL}/users`, { username })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },
  getUserById: (userId, success) => {
    axios.get(`${baseURL}/users/${userId}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },
  deleteUser: (userId, success) => {
    axios.delete(`${baseURL}/users/${userId}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  // Items Controller
  getItems: (success) => {
    axios.get(`${baseURL}/items`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  createItem: (item, success) => {
    axios.post(`${baseURL}/items`, { item })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  getItemById: (id, success) => {
    axios.get(`${baseURL}/items/${id}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  deleteItemById: (id, success) => {
    axios.delete(`${baseURL}/items/${id}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  updateItemById: (id, updatedItem, success) => {
    axios.patch(`${baseURL}/items/${id}`, { item: updatedItem })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  markItemAsRemoved: (id, success) => {
    axios.patch(`${baseURL}/items/${id}`, { item: { removed: true } })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  recoverItemById: (id, success) => {
    axios.patch(`${baseURL}/items/${id}`, { item: { removed: false } })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  // Reservations Controller
  getReservations: (success) => {
    axios.get(`${baseURL}/reservations`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  createReservation: (reservation, success) => {
    axios.post(`${baseURL}/reservations`, { reservation })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  getReservationById: (id, success) => {
    axios.get(`${baseURL}/reservations/${id}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  deleteReservationById: (id, success) => {
    axios.delete(`${baseURL}/reservations/${id}`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  updateReservationById: (id, updatedReservation, success) => {
    axios.patch(`${baseURL}/reservations/${id}`, { reservation: updatedReservation })
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  confirmReservation: (id, success) => {
    axios.patch(`${baseURL}/reservations/${id}/confirm`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },

  // Reservations for a specific user
  getReservationsForUser: (userId, success) => {
    axios.get(`${baseURL}/users/${userId}/reservations`)
      .then((response) => success(response))
      .catch((error) => success(error.message));
  },
};

export default API;
