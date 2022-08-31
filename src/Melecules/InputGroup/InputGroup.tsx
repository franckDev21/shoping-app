import React, { ChangeEvent, FC } from 'react'
import InputFile from '../../Atoms/InputFile/InputFile'
import Text from '../../Atoms/Text/Text'
import style from './style.module.scss'

type InputGroupType = {
  type ?: string,
  placeholder ?: string,
  className ?: string,
  classBox ?: string,
  label ?: string,
  error ?:string,
  onChange ?: (e: ChangeEvent<any>) => void
}

const InputGroup: FC<InputGroupType> = ({ 
  type, 
  placeholder='',
  className='',
  classBox='',
  label='',
  error='',
  onChange = (e) => {}
}) => {

  return (
    <div className={`flex flex-col text-left ${classBox}`}>
      {label && <Text className={`mb-2 ${error && 'text-red-500'}`}>{label}</Text>}
      <InputFile
        type={type}
        placeholder={placeholder}
        className={`${className} ${error && style.border_red}`}
        onChange={(e) => onChange(e)}
      />
      {error && <Text className='text-red-500 mt-2'>{error}</Text> }
    </div>
  )
}

export default InputGroup