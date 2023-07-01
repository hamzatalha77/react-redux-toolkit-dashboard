import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'talha',
    email: 'hamza@jhon.ma',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    remove: (state) => {
      state.name = ''
      state.email = ''
    },
  },
})
const { update, remove } = userSlice.actions
export { userSlice, update, remove }
export default userSlice.reducer
