import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../baseUrl';

const url = `${baseUrl}/users`;

// Post user
const createUser = createAsyncThunk('users/createUser', async ({ username }, thunkAPI) => {
  try {
    const user = { username };
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export default createUser;
