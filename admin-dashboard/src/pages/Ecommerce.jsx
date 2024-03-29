// Core
import React from 'react'
// Context
import { useStateContext } from '../contexts/ContextProvider';
// Components
import { Stacked, Pie, Button, SparkLine } from '../components';
// Images
import { BSCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
// Data
import { ecomPieChartDat, earningData, SparklineAreaData } from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      {/* Header blocks start */}

      <div className='flex flex-wrap
      lg:flex-nowrap justify-center'>

        {/* Earnings block start */}

        <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3
        bg-hero-pattern bg-no-repeat bg-cover
        bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$28,454.35</p>
            </div>
          </div>

          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>

        {/* Earnings block end */}
        {/* Map blocks Customer, Products, Sales, Refunds start */}

        <div className='flex m-3 flex-wrap
          justify-center gap-1 items-center'>
          {earningData.map(item => (
            <div key={item.title}
              className='bg-white 
              dark:text-gray-200
              dark:bg-secondary-dark-bg
              md:w-56 p-4 pt-9 rounded-2x1'>
              <button
                type='button'
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg
                }}
                className='text-2xl opacity-0.9
                  rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-4'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Map blocks Customer, Products, Sales, Refunds start */}

      </div>

      {/* Header blocks - end */}
      {/* Footer blocks - start */}

      <div className='flex gap-10 flex-wrap
      justify-center'>
        <div className='bg-white
          dark:text-gray-200
          dark:bg-secondary-dark-bg m-3 p-4
          rounded-2x1 md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold
              text-xl'>
              Revenue Updates
            </p>
            <div className='flex
              items-center gap-4'>
              <p className='flex items-center
                gap-2 text-gray-600
                hover:drop-shadow-x1'>
                <span> <GoPrimitiveDot /> </span>
                <span>Expense</span>
              </p>
            </div>
            <div className='flex
              items-center gap-4'>
              <p className='flex items-center
                gap-2 text-green-400
                hover:drop-shadow-x1'>
                <span> <GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap 
            justify-center'>
            {/* Left block with diagram - Start */}
            <div className='border-r-1
              border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl
                    font-semibold'>$81,322</span>
                  <span className='p-1.5 
                    hover:drop-shadow-xl
                    cursor-pointer
                    rounded-full text-white
                    bg-green-400 ml-3 text-xs'>
                    30%
                  </span>
                </p>
                <p className='text-gray-500 mt-10'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl
                    font-semibold'>$32,890</span>
                </p>
                <p className='text-gray-500 mt-10'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor='blue'
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            {/* Left block with diagram - end */}

            {/* Right block with diagram - start */}
            <div>
              <Stacked 
                width='3200000px' 
                height='360px'
              />
            </div>
            {/* Right block with diagram - end */}

          </div>
        </div>

      </div>
      {/* Footer blocks - end */}
    </div>
  )
}

export default Ecommerce