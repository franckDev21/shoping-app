import React, { FC, ReactNode } from 'react'

type AuthLayoutType = {
  children : ReactNode
}

const AuthLayout:FC<AuthLayoutType> = ({ children }) => {
  return (
    <main className='overflow-hidden'>
      {children}
    </main>
  )
}

export default AuthLayout