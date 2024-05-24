import React from 'react'
import svgexport14 from '../assets/svgexport-14.svg'
import svgexport15 from '../assets/svgexport-15.svg'
import svgexport16 from '../assets/svgexport-16.svg'
import svgexport17 from '../assets/svgexport-17.svg'
import svgexport18 from '../assets/svgexport-18.svg'
import svgexport19 from '../assets/svgexport-19.svg'

const features = [
  {
    icon: svgexport14,
    text: '멋진 수영장',
  },
  { icon: svgexport15, text: '슈퍼호스트' },
  { icon: svgexport16, text: '한정 시간 무료 취소' },
  { icon: svgexport17, text: '셀프 체크인' },
  { icon: svgexport18, text: '세탁기 및 건조기' },
  { icon: svgexport19, text: 'TV' },
]

const DetailFeatures = () => {
  return (
    <div className=''>
      <div className='py-8'>
        <div className='grid grid-cols-2 gap-y-1'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center'>
              <img src={feature.icon} className='text-2xl mr-2' />
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
