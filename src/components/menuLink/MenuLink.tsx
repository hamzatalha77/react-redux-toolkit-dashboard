import React from 'react'
import './menulink.css'
import { useSelector } from 'react-redux'

interface RootState {
  user: {
    name: string
    // other properties of the user state
  }
}

export default function MenuLink({ icon, text }: any) {
  const name = useSelector((state: RootState) => state.user.name)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === 'Logout' && `(${name})`}
      </span>
    </div>
  )
}
