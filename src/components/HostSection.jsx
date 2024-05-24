import React from 'react'
import safePurchasingSvg from '../assets/safepurchasing.svg'
/* 
  일단 컴포넌트들 파일 하나에 다 때려박았는데
  나중에 나누는 작업 필요하긴 할 듯
  컴포넌트명 생각 필요...
*/
function HostProfile({ imgSrc, name, description }) {
  // NOTE : 호스트 프로필 - 호스트 사진, 이름, 설명이고
  // 여기서 설명은 일단 '호스트'로 우선은 고정
  return (
    <div className='flex flex-col items-center'>
      <img
        src={imgSrc}
        alt='Host'
        className='w-32 h-32 object-cover rounded-full mb-4'
      />
      <h2 className='font-bold text-2xl mb-1'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

function HostInfo({ reviews, rating, hostingYears }) {
  // NOTE : 호스트 정보 - 후기, 평점, 호스팅 경력
  return (
    <div className='ml-8'>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>후기</p>
        <p className='text-lg font-bold'>{reviews}개</p>
        <hr className='my-2 border-gray-300' />
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>평점</p>
        <p className='text-lg font-bold'>{rating}★</p>
        <hr className='my-2 border-gray-300' />
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>호스팅 경력</p>
        <p className='text-lg font-bold'>{hostingYears}년</p>
      </div>
    </div>
  )
}

function SafePaymentNotice() {
  // NOTE : 안전 결제 문구 컴포넌트
  // FIXME : 이미지 크기가 안 줄여짐

  return (
    <div className='mt-4 flex items-center'>
      <img src={safePurchasingSvg} alt='Safe Purchasing' className='w-12 h-12 mr-2' />
      <p className='text-xs'>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</p>
    </div>
  )
} 

function NoSuperHostDetails({ responseRate, responseTime }) {
  // NOTE : 슈퍼 호스트가 아닐 때 띄워줄 컴포넌트
  // TODO : 메시지 보내기 기능?
  return (
    <>
      <h3 className='text-xl font-bold mb-2'>호스트 상세 정보</h3>
      <p>응답률: {responseRate}</p>
      <p>{responseTime}</p>
      <button className='mt-4 bg-black text-white p-2 rounded'>호스트에게 메시지 보내기</button>
      <hr className='mt-4 mb-4 border-gray-300' />
    </>
  )
} 

// TODO : 슈퍼 호스트일 때의 Detail 정보 만들기

function HostSection() {
  // TODO : 거주지에 address 넣는 부분, 더보기 버튼
  const hostData = {
    address: '가평군, 한국',
    isSuperHost: false,
    name: 'Sahee',
    rating: 5,
    reviews: 3,
    hostingYears: 2,
    responseRate: '100%',
    responseTime: '몇 시간 이내에 응답',
    imgSrc:
      'https://a0.muscache.com/im/pictures/user/User-65974611/original/2a048f11-2a58-4d87-acf6-c07bc987da9b.jpeg?im_w=240',
  }

  return (
    <div className='flex flex-col justify-center p-5'>
      <h2 className='text-2xl font-bold mb-5'>호스트 소개</h2>
      <div className='max-w-4xl w-full bg-hostSectionBackground pt-10 px-6 pb-6 rounded-3xl shadow-lg flex'>
        <div
          className='bg-white p-6 rounded-3xl shadow-lg flex items-center focus:outline-none w-1/3'
          role='link'
          tabIndex='0'
        >
          <HostProfile imgSrc={hostData.imgSrc} name={hostData.name} description="호스트" />
          <HostInfo reviews={hostData.reviews} rating={hostData.rating} hostingYears={hostData.hostingYears} />
        </div>
        <div className='flex-grow ml-8'>
          {!hostData.isSuperHost && (
            <NoSuperHostDetails responseRate={hostData.responseRate} responseTime={hostData.responseTime} />
          )}
          <SafePaymentNotice />
        </div>
      </div>
    </div>
  )
}

export default HostSection
