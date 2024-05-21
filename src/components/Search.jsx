import React from 'react'
import group2 from '../assets/Group2.svg'

const Search = () => {
  return (
    <>
      <div className='relative w-full'>
        <nav className='absolute left-1/2 transform -translate-x-1/2 top-[70px] lg:top-3'>
          <ul className='flex justify-center gap-4'>
            <li>
              <a href='/'>숙소</a>
            </li>
            <li>
              <a href='/'>체험</a>
            </li>
            <li>
              <a href='/'>온라인 체험</a>
            </li>
          </ul>
        </nav>

        <div className='absolute left-1/2 transform -translate-x-1/2 top-[130px] lg:top-[70px] rounded-[500px] search-shadow'>
          <div className='h-[63px] px-1.5 bg-white rounded-[500px] justify-center items-center gap-px flex items-center'>
            <div className='w-[209px]'>
              <label className='px-6 bg-white rounded-tl-[500px] rounded-bl-[500px] flex-col justify-center items-start gap-1 inline-flex'>
                <div className="text-neutral-800 text-xs font-['SF Pro']">여행지</div>
                <input
                  className="text-neutral-500 text-sm font-normal font-['SF Pro']"
                  placeholder='여행지 검색'
                />
              </label>
            </div>

            <div className='w-[25px] h-[0px] rotate-90 border border-solid border-gray-200'></div>

            <div className='w-[129px] px-6 bg-white flex-col justify-start items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">체크인</div>
              <input
                className="text-neutral-500 text-sm font-normal font-['SF Pro']"
                placeholder='날짜 추가'
              />
            </div>

            <div className='w-[25px] h-[0px] rotate-90 border border-solid border-gray-200'></div>

            <div className='w-[129px] px-6 bg-white flex-col justify-center items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">체크아웃</div>
              <input
                className="text-neutral-500 text-sm font-normal font-['SF Pro']"
                placeholder='날짜 추가'
              />
            </div>

            <div className='w-[25px] h-[0px] rotate-90 border border-solid border-gray-200'></div>

            <div className='w-[209px] px-6 bg-white flex-col justify-center items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">여행자</div>
              <input
                className="text-neutral-500 text-sm font-normal font-['SF Pro']"
                placeholder='게스트 추가'
              />
            </div>

            <div className='w-12 h-12 absolute right-3'>
              <img src={group2} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
