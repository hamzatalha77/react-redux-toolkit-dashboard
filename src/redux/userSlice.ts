import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const updateUser2 = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post('http://localhost:8800/api/users/1/update', user)
  return res.data
})
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'talha',
      email: 'hamza@jhon.ma',
    },
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [updateUser2.fulfilled]: (state) => {
      state.pending = true
      state.error = false
    },
  },
})

const {} = userSlice.actions
export { userSlice, updateUser2 }
export default userSlice.reducer
