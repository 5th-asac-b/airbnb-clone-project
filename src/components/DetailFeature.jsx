import React from 'react'

const features = [
  { icon: '🌳', text: '한적한 시골' },
  { icon: '📅', text: '한정 시간 무료 취소' },
  { icon: '🚪', text: '셀프 체크인' },
  { icon: '🧺', text: '세탁기' },
  { icon: '📺', text: 'TV' },
  { icon: '📶', text: '무선 인터넷' },
]

const DetailFeatures = () => {
  return (
    <div className=''>
      <div className='py-8'>
        <div className='grid grid-cols-2 gap-y-1'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center'>
              <span className='text-2xl mr-2'>{feature.icon}</span>
              <span className='text-base text-[14px]'>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default DetailFeatures
