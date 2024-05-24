import React from 'react'
import DetailCalendar from './DetailCalendar'
import DetailFeatures from './DetailFeature'
import DetailGallery from './DetailGallery'
import DetailHostInfo from './DetailHostInfo'
import DetailSubTitle from './DetailSubTitle'
import DetailTitle from './DetailTitle'
import ReservationComponent from './ReservationComponent'
import Layout from './Layout.jsx'
import DetailReview from './DetailReview.jsx'
import DetailAccommodationInfo from './DetailAccommodation.jsx'

export default function DetailLayout() {
  return (
    <Layout padding={'main-padding-detail'}>
      <div className='max-w-full xl:w-[1120px] gap-10'>
        <DetailTitle />
        <DetailGallery />
        <div className='flex flex-wrap my-10'>
          <div className='flex-1'>
            <DetailSubTitle />
            <DetailFeatures />
            <DetailHostInfo />
          </div>
          <div className='flex justify-center md:justify-end w-full md:w-auto'>
            <ReservationComponent />
            {/* 그거 이름이 모였지?? 가격정보?? */}
          </div>
        </div>
        <DetailCalendar py={'py-12'} />
        <hr />
        <DetailReview />
        <hr />
        <DetailAccommodationInfo />
      </div>
    </Layout>
  )
}
