import React from 'react'

const Hero = ({ title , subtitle }) => {
  let x =10;
  let y=5;
  return (
    <>
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h2 className='text-white font-serif text-xl capitalize'>{title}</h2>
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Become a React Dev
          </h1>
          <h3>{x+y}</h3>
          <p>{subtitle}</p>
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero