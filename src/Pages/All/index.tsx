import React from 'react'

const All = () => {
  return <>
    <header>
      {/* topbar */}
      <section className='text-sm bg-gray-100 py-2'>
        <div className="container flex justify-between items-center">
          <div className="left">
            <span className='mr-3 inline-flex items-center'>
              <span>Get upto 50% discount everyday</span>
            </span>

            <span className='ml-3'>
              <span className='w-2 h-2 border border-gray-400 mr-1 inline-block'></span>
              <span>website@gmail.com</span>
            </span>
          </div>

          <div className="rigth">
            <span className='mr-3'>$ Currency </span>
            <span>Language</span>
          </div>
        </div>
      </section>
    </header>
  
  </>
}

export default All