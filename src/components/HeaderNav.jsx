import React from 'react'
import Search from './Search'
import HeaderLogo from '../assets/airbnbLogo.svg'
import language from '../assets/language.svg'
import account from '../assets/account.svg'

const HeaderNav = () => {
  return (
    <header className='my-5 '>
      <div className='containers relative'>
        <Search />
        <div className='header-container'>
          <div className='header-logo'>
            <a href='/'>
              <img src={HeaderLogo} alt='에어비앤비 로고입니다.' />
            </a>
          </div>

          {/* <nav className='header-nav w-1/3 flex justify-center'>
            <ul>
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
          </nav> */}

          <div className='header-more flex justify-end '>
            {/* <a href='#'>More Btn</a> */}
            <div className='justify-end items-center gap-6 inline-flex'>
              <div className="text-neutral-800 text-sm font-['SF Pro']">
                당신의 공간을 에어비엔비하세요
              </div>
              <button className='w-4 h-4 relative flex-col justify-start items-start flex'>
                <img src={language} />
                {/* <div className='w-4 h-4 rounded-full border border-neutral-800' /> */}
                {/* <div className='w-1.5 h-4 rounded-full border border-neutral-800' /> */}
                {/* <div className='w-4 h-[0px] border border-neutral-800'></div> */}
              </button>

              <button className='w-auto h-auto py-1 px-2 bg-white rounded-[29px] border border-gray-300 relative flex items-center'>
                <div className='flex-col justify-start items-start gap-1 inline-flex'>
                  {/* <img src={menu} /> */}
                </div>

                <div className='w-8 h-[34px] relative ml-4 flex items-center'>
                  <img src={account} />
                  {/* <div className='w-2.5 h-2.5 left-[23px] top-[-1px] absolute bg-rose-500 rounded-full border border-white' /> */}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
