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
  reducers: {
  
  },
  extraReducers:{[updateUser2.pending]}
})

const {} = userSlice.actions
export { userSlice,updateUser2 }
export default userSlice.reducer
