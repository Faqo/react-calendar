import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { useState } from 'react';

import { Navbar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from '../../helpers';

const events = [{
  title: 'cumpleaños del jefe',
  notes: 'hay que comprar torta',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Frank'
  }
},]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'agenda')

    const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  };

  
  const onDoubleClick = (event) =>{
    console.log({doubleClick:event});
  } 

  const onSelect = (event) =>{
    console.log({click:event});
  }

  const onViewChange = (event) =>{
    console.log({viewChanged:event});
    localStorage.setItem('lastView', event);
    setLastView(event);
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
    </>
  )
}