import React, { FC } from 'react'

type CopyRigthType = {
  className ?: string,
  trait ?: boolean
}
const CopyRigth:FC<CopyRigthType> = ({ className='', trait=true }) => {
  return (
    <div className={`${className} pt-5 pb-4 text-center ${trait ? 'border-t':''}`}>
      <h2 className='text-gray-700 mb-1'>Powered By OpenCart Zenex © 2022</h2>
      <div className="flex text-gray-500 text-center justify-center items-center">
        <i className="fa-brands hover:text-primary transition cursor-pointer mx-1 text-2xl fa-cc-mastercard"></i>
        <i className="fa-brands hover:text-primary transition cursor-pointer mx-1 text-2xl fa-cc-visa"></i>
        <i className="fa-regular hover:text-primary transition cursor-pointer mx-1 text-2xl fa-credit-card"></i>
        <i className="fa-brands hover:text-primary transition cursor-pointer mx-1 text-2xl fa-cc-paypal"></i>
      </div>
    </div>
  )
}

export default CopyRigth