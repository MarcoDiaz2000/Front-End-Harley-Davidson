import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../baseUrl';

const url = `${baseUrl}/items`;

// Get bikes
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async (thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Get bike
export const fetchBike = createAsyncThunk('bikes/fetchBike', async ({ id }, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Create bike
export const createBike = createAsyncThunk('bikes/createBike', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Mark bike as removed
export const markBikeAsRemoved = createAsyncThunk('bikes/markBikeAsRemoved', async ({ id }, thunkAPI) => {
  try {
    const response = await axios.patch(`${url}/${id}`, { item: { removed: true } });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Mark bike as restored
export const markBikeAsRestored = createAsyncThunk('bikes/markBikeAsRestored', async ({ id }, thunkAPI) => {
  try {
    const response = await axios.patch(`${url}/${id}`, { item: { removed: false } });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
