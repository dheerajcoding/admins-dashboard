import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 5, 20, 10, 0),
      end: new Date(2023, 5, 20, 12, 0),
    },
    {
      title: 'Lunch',
      start: new Date(2023, 5, 21, 12, 0),
      end: new Date(2023, 5, 21, 13, 0),
    },
  ];

  return (
    <div>
      <h2>Calendar Page</h2>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
