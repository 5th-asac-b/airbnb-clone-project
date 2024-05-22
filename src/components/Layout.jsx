import { children } from 'react'
import HeaderNav from './HeaderNav'
import FooterComponent from './FooterComponent'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <HeaderNav />
      <main className='flex justify-center my-5 w-full'>
        <div className=' padding-all'>{children}</div>
      </main>
      <FooterComponent />
    </div>
  )
}
export default Layout
