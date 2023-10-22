import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// First, create the thunk
export const fetchData = createAsyncThunk("data/fetchData", async (api) => {
  const options = {
    method: 'GET',
    url: api,
    params: {limit: '10000'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  // try {
  //   const response = await axios.get(api);
  //   return response.data;
  // } catch (error) {
  //   return error;
  // }
});

const initialState = {
  data: [],
  searched:[]
};

// Then, handle actions in your reducers:
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    search: (state, action) => {
      action.payload === "all" ? state.searched = state.data : state.searched = state.data.filter((exercise) => {
        return exercise.name.toLowerCase().includes(action.payload) || exercise.equipment.toLowerCase().includes(action.payload) || exercise.bodyPart.toLowerCase().includes(action.payload) || exercise.target.toLowerCase().includes(action.payload)
      })
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    });
  },
});

export const {search} = dataSlice.actions 

export default dataSlice.reducer