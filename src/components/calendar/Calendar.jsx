import React from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({
  weekDates,
  isAnotherMonth,
  eventsList,
  handleEventRemove,
}) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} isAnotherMonth={isAnotherMonth} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            eventsList={eventsList}
            handleEventRemove={handleEventRemove}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
