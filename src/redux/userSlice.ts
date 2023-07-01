import { createSlice } from '@reduxjs/toolkit'

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
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    updateError: (state) => {
      state.error = true
      state.pending = false
    },
  },
})
const { updateStart, updateSuccess, updateError } = userSlice.actions
export { userSlice, updateStart, updateSuccess, updateError }
export default userSlice.reducer
