import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, eventsList, handleEventRemove }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = eventsList.filter(
          ({ dateFrom, dateTo }) =>
            new Date(dateFrom) >= dayStart && new Date(dateTo) <= dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            yearOfTheDay={dayStart.getFullYear()}
            monthOfTheDay={dayStart.getMonth()}
            dayEvents={dayEvents}
            eventsList={eventsList}
            handleEventRemove={handleEventRemove}
          />
        );
      })}
    </div>
  );
};

export default Week;
