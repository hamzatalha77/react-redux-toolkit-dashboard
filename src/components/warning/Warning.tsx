import React from 'react'
import './warning.css'
import { useSelector } from 'react-redux'

interface RootState {
  user: {
    userInfo: {
      name: string
      email: string
    }
  }
}
export default function Warning() {
  const name = useSelector((state: RootState) => state.user.userInfo.name)
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  )
}
