import Search from './Search'
import HeaderContent from './HeaderContent'

const HeaderNav = () => {
  return (
    <header className={`py-5 bg-white`}>
      <HeaderContent />
      <Search />
    </header>
  )
}

export default HeaderNav
