import React, { FC, ReactNode } from 'react'

type AuthLayoutType = {
  children : ReactNode
}

const AuthLayout:FC<AuthLayoutType> = ({ children }) => {
  return (
    <main className='overflow-hidden bg-gray-100 min-h-screen'>
      {children}
    </main>
  )
}

export default AuthLayout