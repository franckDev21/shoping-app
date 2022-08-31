import React, { FC, ReactNode } from 'react'

type AuthLayoutType = {
  children : ReactNode
}

const AuthLayout:FC<AuthLayoutType> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default AuthLayout