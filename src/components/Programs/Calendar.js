import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Contexte } from '../Contexte';


export default function Agenda() {

  const {date} = useContext(Contexte)

  const [selectedDate, setSelectedDate] = useState()

  const handleClick = ((e) => {
    let selectedDate = setSelectedDate(e.target.value)
  })

  return (
    <div>
      <div>Calendar</div>

      <div className='w-50'>
        <div className='calendar-container'>
          <Calendar onChange={handleClick} value={date} />
        </div>

        <div className='text-center'>
          Selected date : {selectedDate.toDateString()}
        </div>
      </div>

    </div>

  )
}
