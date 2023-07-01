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
    addHello: (state, action) => {
      state.name = 'hello ' + action.payload.name
    },
  },
})
const { update, remove, addHello } = userSlice.actions
export { userSlice, update, remove, addHello }
export default userSlice.reducer
