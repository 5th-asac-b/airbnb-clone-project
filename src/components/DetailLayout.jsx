import DetailCalendar from './DetailCalendar'
import DetailFeatures from './DetailFeature'
import DetailGallery from './DetailGallery'
import DetailHostInfo from './DetailHostInfo'
import DetailSubTitle from './DetailSubTitle'
import DetailTitle from './DetailTitle'
import ReservationComponent from './ReservationComponent'
import Layout from './Layout.jsx'

const DetailLayout = () => {
  return (
    <>
      <Layout padding={'main-padding-detail'}>
        <div className='max-w-full xl:w-[1120px]'>
          <DetailTitle />
          <DetailGallery />
          <div className='md:grid md:grid-cols-3 mb-10'>
            <div className='col-span-2'>
              <DetailSubTitle />
              <DetailFeatures />
              <DetailHostInfo />
            </div>
            <div className='flex justify-center md:justify-end mt-10'>
              <ReservationComponent />
            </div>
          </div>
          <DetailCalendar />
        </div>
      </Layout>
    </>
  )
}
export default DetailLayout
