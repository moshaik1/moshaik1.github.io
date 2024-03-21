
import React from 'react'


function PortfolioItem( {title, imgURL, stack, link }) {
  return (
    <> 
     <a href={link} target='_blank' class='group'>
    <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:bg-blue-300'>
      
        <img 
            src={imgURL}
            alt='portfolio'
            className='w-full h-36 md:h-48 object-cover cursor-pointer'
        />
        <div className='w-100 p-4'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold group-hover:text-gray-700'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center 
            justify-start text-xs md:text-sm group-hover:text-gray-700'> 
               {stack.map(item => (
                <span className='inline-block px-2 py-1 font-semibold border-2 
                border-stone-900 dark:border-white rounded-md group-hover:text-gray-700'> 
                    {item}
                </span>
               ))} 
            </p>
        </div>
      
    </div>
    </a>
  </>
  )
}

export default PortfolioItem