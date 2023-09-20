import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const API = {
  login: (user, success) => {
    axios.post(`${baseURL}/users/sign_in`,
      {
        user,
      })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  register: (user, success) => {
    axios.post(`${baseURL}/users`,
      {
        user,
      })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchMotors: (success) => {
    axios.get(`${baseURL}/motorcycles`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchSingleMotor: (id, success) => {
    axios.get(`${baseURL}/motorcycles/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  addMotor: (motor, userId, success) => {
    axios.post(`${baseURL}/motorcycles?user_id=${userId}`, {
      motors: motor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  updateMotor: (id, motor, success) => {
    axios.patch(`${baseURL}/motorcycles/${id}`, {
      motors: motor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  deleteMotor: (id, success) => {
    axios.delete(`${baseURL}/motorcycles/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchReservations: (userId, success) => {
    axios.get(`${baseURL}/reservations?user_id=${userId}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchSingleReservation: (id, success) => {
    axios.get(`${baseURL}/reservations/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  addReservation: (reservation, userId, motorId, success) => {
    axios.post(`${baseURL}/reservations?user_id=${userId}&motor_id=${motorId}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  updateReservation: (id, reservation, success) => {
    axios.patch(`${baseURL}/reservations/${id}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  deleteReservation: (id, success) => {
    axios.delete(`${baseURL}/reservations/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
};

export default API;
