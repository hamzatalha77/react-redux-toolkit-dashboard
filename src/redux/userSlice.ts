import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'jhon',
    email: 'hamza@jhon.ma',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
  },
})
const { update } = userSlice.actions
export { userSlice, update }
export default userSlice.reducer
