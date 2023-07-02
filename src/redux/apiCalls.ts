import axios from 'axios'
import { updateStart, updateSuccess, updateError } from './userSlice'

const updateUser = async (user: any, dispatch: any) => {
  dispatch(updateStart())
  try {
    const res = await axios.post(
      'http://localhost:8800/api/users/:id/update',
      user
    )
    dispatch(updateSuccess(res.data))
  } catch (error) {
    dispatch(updateError())
  }
}
export { updateUser }
