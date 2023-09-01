import React, { useState, useContext } from 'react';
import { Contexte } from '../Contexte';
import Calendar from 'react-calendar';
import ReactDatePicker from 'react-datepicker';


// import 'react-calendar/dist/Calendar.css'   //CSS de base 



export default function Agenda() {

  const { date } = useContext(Contexte)


  const [sejourStart, setSejourStart] = useState()
  const [sejourEnd, setSejourEnd] = useState()

  // const voyage = (() => {{sejourStart}; {sejourEnd}});

// const departure = () => sejourStart.toDateString()




  // const
  // console.log(date)
  // console.log(sejour)
  // console.log(() => sejourStart[1].toDateString())
  // console.log({sejourStart});
// console.log(departure)

  

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
        <span> le voyage est du  : </span> 
      </div>
{/*  to {sejourEnd} {sejourStart[1]}*/}


    </div>
  )
}


