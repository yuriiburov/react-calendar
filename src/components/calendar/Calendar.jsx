import React, { Component, useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, weekStartDate, isAnotherMonth }) => {
  const [eventses, setEventses] = useState(events);

  const handleEventsChange = (el) => {
    setEventses(el);
  };

  return (
    <section className="calendar">
      <Navigation
        weekDates={weekDates}
        weekStartDate={weekStartDate}
        isAnotherMonth={isAnotherMonth}
      />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={eventses}
            setEvents={handleEventsChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
