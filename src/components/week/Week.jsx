import React from 'react';
import PropTypes from 'prop-types';

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
            dayStart={dayStart}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            handleEventRemove={handleEventRemove}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  eventsList: PropTypes.array.isRequired,
  handleEventRemove: PropTypes.func.isRequired,
};

export default Week;
