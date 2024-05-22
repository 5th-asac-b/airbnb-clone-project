import React from 'react'
import data from '../../../data.json'
import Cards from './Cards'

const Grid = () => {
  console.log(data.roomInfo)
  return (
    <div className='grid pb-8 mx-auto max-w-screen-xl'>
      <Cards />
    </div>
  )
}

export default Grid
