import React from 'react'

const Cards = ({ children, bg = 'bg-teal-500' }) => {
  return (
    <div className={`${bg} p-6 text-center shadow-xl rounded-xl`}>
        {children}
    </div>
  )
}

export default Cards