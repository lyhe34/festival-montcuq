import React, { useState, useContext } from 'react';
import { Contexte } from '../Contexte';
import Calendar from 'react-calendar';
import ReactDatePicker from 'react-datepicker';
import '../../../node_modules/react-calendar/dist/Calendar.css'
import '../../styles/DatePicker.css'

export default function Agenda() {

  const { date } = useContext(Contexte)

  const [sejourStart, setSejourStart] = useState()
  const [sejourEnd, setSejourEnd] = useState()

  return (
    <div>
      <div>Calendrier</div>
      <div className=''> {/** changer le positionement ici */}
        <div>
          <p>Choisissez une date de départ : </p>

          <ReactDatePicker
            selected={sejourStart}
            onChange={(date) => setSejourStart(date)}
            dateFormat="dd/MM/yyyy"
            selectsStart
            startDate={sejourStart}
            endDate={sejourEnd}
          />

        </div>

        <div>
          <p>Choisissez une date de retour : </p>
          <ReactDatePicker
            selected={sejourEnd}
            onChange={(date) => setSejourEnd(date)}
            dateFormat="dd/MM/yyyy"
            selectsEnd
            startDate={sejourStart}
            endDate={sejourEnd}
            minDate={sejourStart}
          />
        </div>
      </div>

      <div className='m-5'>
        <Calendar value={date} selectRange={true} />
        { sejourStart && sejourEnd && <div> le voyage est du  : {sejourStart.toLocaleDateString() + "au " + sejourEnd.toLocaleDateString()}  </div> }
      </div>
    </div>
  )
}


