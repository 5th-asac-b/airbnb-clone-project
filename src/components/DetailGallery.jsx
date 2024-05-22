import React from 'react'
import imageData from '../assets/imageData.json'

const DetailGallery = () => {
  return (
    <div className='px-20 pt-6'>
      <div className='flex gap-2'>
        <div className='flex-1'>
          <div className='h-full'>
            <img
              src={imageData.mainImage}
              alt='Main'
              className='w-full h-full object-cover rounded-l-lg'
            />
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-2'>
          {imageData.subImages.map((src, index) => (
            <div key={index} className='relative'>
              <img
                src={src}
                alt={`Sub ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover ${index === 1 ? 'rounded-tr-lg' : ''} ${index === 3 ? 'rounded-br-lg' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailGallery