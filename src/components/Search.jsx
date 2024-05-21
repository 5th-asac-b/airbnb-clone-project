import group from '../assets/Group.svg'
import group2 from '../assets/Group2.svg'

const Search = () => {
  return (
    // <div className='fixed top-5 left-0 w-full bg-white z-50'>
    //   <div className='relative w-full max-w-screen-lg mx-auto px-4'>
    //     <div className='w-full h-12 bg-white rounded-full flex items-center search-shadow px-4'>
    //       <button className='flex justify-center items-center rounded-full'>
    //         <img src={group} alt='검색 버튼' />
    //       </button>

    //       <div className='flex w-full ml-4'>
    //         <button className='flex-1 text-neutral-800 text-sm font-medium border-r border-gray-200'>
    //           Anywhere
    //         </button>

    //         <button className='flex-1 text-neutral-800 text-sm font-medium border-r border-gray-200'>
    //           Any week
    //         </button>

    //         <button className='flex-1 text-zinc-600 text-sm font-normal'>Add guests</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='relative w-full'>
      <nav className='absolute left-1/2 transform -translate-x-1/2 top-16 lg:top-3'>
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

      <div className='absolute left-1/2 transform -translate-x-1/2 top-32 lg:top-20 w-full lg:max-w-4xl rounded-full search-shadow bg-white'>
        <div className='flex items-center h-16 px-2'>
          <div className='flex items-center w-52 px-6 rounded-l-full'>
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>여행지</span>
              <input className='text-neutral-500 text-sm' placeholder='여행지 검색' />
            </label>
          </div>

          <div className='h-2/5 border border-solid border-gray-200'></div>

          <div className='flex items-center w-32 px-6'>
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>체크인</span>
              <input className='text-neutral-500 text-sm' placeholder='날짜 추가' />
            </label>
          </div>

          <div className='h-2/5 border border-solid border-gray-200'></div>

          <div className='flex items-center w-32 px-6'>
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>체크아웃</span>
              <input className='text-neutral-500 text-sm' placeholder='날짜 추가' />
            </label>
          </div>

          <div className='h-2/5 border border-solid border-gray-200'></div>

          <div className='flex items-center w-52 px-6 rounded-r-full'>
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>여행자</span>
              <input className='text-neutral-500 text-sm' placeholder='게스트 추가' />
            </label>
          </div>

          <button className='absolute right-3 w-12 h-12'>
            <img src={group2} alt='검색 버튼' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
