import React from 'react'
import group2 from '../assets/Group2.svg'

const InputField = ({ label, placeholder, className }) => (
  <div className={`flex items-center ${className}`}>
    <label className='flex flex-col'>
      <span className='text-neutral-800 text-xs'>{label}</span>
      <input className='text-neutral-500 text-sm' placeholder={placeholder} />
    </label>
  </div>
)

const Search = () => (
  <div className='w-full flex justify-center mt-10 md:px-20'>
    <div className='relative lg:max-w-4xl rounded-full search-shadow bg-white flex items-center h-16 px-2'>
      <InputField label='여행지' placeholder='여행지 검색' className='w-52 px-6 rounded-l-full' />

      <div className='h-10 border-l border-gray-200'></div>

      <InputField label='체크인' placeholder='날짜 추가' className='w-32 px-6' />

      <div className='h-10 border-l border-gray-200'></div>

      <InputField label='체크아웃' placeholder='날짜 추가' className='w-32 px-6' />

      <div className='h-10 border-l border-gray-200'></div>

      <InputField label='여행자' placeholder='게스트 추가' className='w-52 px-6 rounded-r-full' />

      <button className='absolute right-3 w-12 h-12'>
        <img src={group2} alt='검색 버튼' />
      </button>
    </div>
  </div>
)

export default Search
