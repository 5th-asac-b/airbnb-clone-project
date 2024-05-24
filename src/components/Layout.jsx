import { children } from 'react'
import HeaderNav from './HeaderNav'
import FooterComponent from './FooterComponent'
import Categories from './Categories/Categories'

const Layout = ({ children, padding }) => {
  return (
    <>
      <div className={`flex flex-col ${padding}`}>
        <HeaderNav />
        <Categories />
        <main className='my-5 w-full flex justify-center'>{children}</main>
      </div>
      <FooterComponent />
    </>
  )
}
export default Layout
