import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
export interface User {
  name: string
  email: string
}

const updateUser2 = createAsyncThunk('users/update', async (user: User) => {
  const { name, email } = user
  const res = await axios.post('http://localhost:8800/api/users/1/update', {
    name,
    email,
  })
  return res.data
})

const deleteUser2 = createAsyncThunk('users/delete', async (user) => {
  const res = await axios.post('http://localhost:8800/api/users/1/delete', user)
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
  extraReducers: (builder) => {
    builder
      .addCase(updateUser2.pending, (state) => {
        state.pending = true
        state.error = false
      })
      .addCase(updateUser2.fulfilled, (state, action: PayloadAction<User>) => {
        state.pending = false
        state.userInfo = action.payload
      })
      .addCase(updateUser2.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

// const {} = userSlice.actions;
export { userSlice, updateUser2 }
export default userSlice.reducer
