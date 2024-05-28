import React from 'react'
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
} from 'date-fns'

const CalendarLayout = ({ currentMonth, onDateClick, selectedDates, setCurrentMonth }) => {
  const { checkInDate, checkOutDate } = selectedDates

  const renderHeader = (month, isNext) => {
    return (
      <div className='flex justify-between items-center mb-4'>
        {!isNext && (
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className='text-gray-600'
          >
            &lt;
          </button>
        )}
        <h2 className='text-lg text-center w-full'>{format(month, 'yyyy년 MMMM')}</h2>
        {isNext && (
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className='text-gray-600'
          >
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
            className={`p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-300'
                : isSelected
                  ? 'bg-black text-white rounded-full'
                  : isInRange
                    ? 'bg-gray-100'
                    : 'text-gray-900'
            }`}
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

  const nextMonthDate = addMonths(currentMonth, 1)

  return (
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
      </div>
    </div>
  )
}

export default CalendarLayout
