import React from 'react'
import './warning.css'
import { useSelector } from 'react-redux'

interface RootState {
  user: {
    name: string
    // other properties of the user state
  }
}
export default function Warning() {
  const name = useSelector((state: RootState) => state.user.name)
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  )
}
