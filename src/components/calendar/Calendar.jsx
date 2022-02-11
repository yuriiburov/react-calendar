import React, { Component, useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, weekStartDate, isAnotherMonth }) => {
  const [eventsList, setEventsList] = useState(events);

  const handleEventRemove = (e) => {
    events.forEach(({ id }) => {
      if (id === Number(e.target.attributes[1].nodeValue)) {
        // setEventsList(events.splice(id - 1, 1)); // update, bute value doesn't true
        events.splice(id - 1, 1);
        setEventsList(events); // doesn't update
      }
    });
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
            events={eventsList}
            handleEventRemove={handleEventRemove}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
