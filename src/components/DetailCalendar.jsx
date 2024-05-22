import React, { useState } from 'react'
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
  differenceInDays,
} from 'date-fns'

const DetailCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  const renderHeader = (month, isNext) => {
    return (
      <div className='flex justify-between items-center mb-4'>
        {!isNext && (
          <button onClick={prevMonth} className='text-gray-600'>
            &lt;
          </button>
        )}
        <h2 className='text-lg text-center w-full'>{format(month, 'yyyy년 MMMM')}</h2>
        {isNext && (
          <button onClick={nextMonth} className='text-gray-600'>
            &gt;
          </button>
        )}
      </div>
    )
  }

  const renderDays = () => {
    const days = []
    const date = startOfWeek(new Date())

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='text-center' key={i}>
          {format(addDays(date, i), 'E')}
        </div>,
      )
    }

    return <div className='grid grid-cols-7'>{days}</div>
  }

  const renderCells = (month) => {
    const monthStart = startOfMonth(month)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd')
        const cloneDay = day
        const isSelected =
          (checkInDate && isSameDay(day, checkInDate)) ||
          (checkOutDate && isSameDay(day, checkOutDate))
        const isInRange =
          checkInDate && checkOutDate && isAfter(day, checkInDate) && isBefore(day, checkOutDate)

        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart) ? 'text-gray-300' : isSelected ? 'bg-blue-500 text-white rounded-full' : isInRange ? 'bg-blue-200' : 'text-gray-900'}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            {formattedDate}
          </div>,
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className='grid grid-cols-7' key={day}>
          {days}
        </div>,
      )
      days = []
    }
    return <div>{rows}</div>
  }

  const onDateClick = (day) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day)
      setCheckOutDate(null)
    } else if (isBefore(day, checkInDate)) {
      setCheckInDate(day)
    } else {
      setCheckOutDate(day)
    }
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const clearDates = () => {
    setCheckInDate(null)
    setCheckOutDate(null)
  }

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      return differenceInDays(checkOutDate, checkInDate)
    }
    return 0
  }

  const nextMonthDate = addMonths(currentMonth, 1)

  return (
    <div className='px-20 py-12 bg-white shadow-lg rounded-lg'>
      <div className='text-left mb-4'>
        <h1 className='text-[22px]'>가평군에서 {calculateNights()}박</h1>
        {checkInDate && checkOutDate ? (
          <p className='text-gray-600 text-[14px] pt-2'>
            {format(checkInDate, 'yyyy년 MMMM d일')} - {format(checkOutDate, 'yyyy년 MMMM d일')}
          </p>
        ) : (
          <div className='text-gray-600 text-[14px] pt-2'>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.{' \n'}
          </div>
        )}
      </div>
      <div className='flex space-x-10'>
        <div>
          {renderHeader(currentMonth, false)}
          {renderDays()}
          {renderCells(currentMonth)}
        </div>
        <div>
          {renderHeader(nextMonthDate, true)}
          {renderDays()}
          {renderCells(nextMonthDate)}
          <div className='text-right mt-4'>
            <button onClick={clearDates} className='underline text-[14px]'>
              날짜 지우기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCalendar
