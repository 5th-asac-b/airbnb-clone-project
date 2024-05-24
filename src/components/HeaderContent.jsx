import HeaderLogo from '../assets/airbnbLogo.svg'
import language from '../assets/language.svg'
import account from '../assets/account.svg'
import menu from '../assets/menu.svg'

const HeaderContent = () => (
  <div className='relative grid grid-cols-3 items-center'>
    <div>
      <a href='/'>
        <img src={HeaderLogo} alt='에어비앤비 로고입니다.' />
      </a>
    </div>

    <nav className='header-nav'>
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

    <div className='flex justify-end items-center gap-6'>
      <div className='text-neutral-800 text-sm'>당신의 공간을 에어비앤비하세요</div>
      <button className='relative'>
        <img src={language} alt='언어 선택' />
      </button>
      <button className='py-1 px-2 bg-white rounded-[29px] border border-gray-300 flex items-center min-w-[85px]'>
        <img src={menu} alt='메뉴' className='mr-4' />
        <img src={account} alt='계정' />
      </button>
    </div>
  </div>
)

export default HeaderContent
