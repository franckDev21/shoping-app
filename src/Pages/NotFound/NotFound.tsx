import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../../Atoms/Text/Text'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center flex-col'>
      <Text className='text-4xl font-extrabold text-red-400'>NotFound</Text>
      <Link to='/' className='inline-block text-blue-400 underline mt-4'>back</Link>
    </div>
  )
}

export default NotFound