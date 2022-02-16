import React from 'react';
import PropTypes from 'prop-types';

import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dayStart, dataDay, dayEvents, handleEventRemove }) => {
  const redLine = () => {
    if (
      dataDay === new Date().getDate() &&
      dayStart.getMonth() === new Date().getMonth() &&
      dayStart.getFullYear() === new Date().getFullYear()
    ) {
      return (
        <span
          className="red-line"
          style={{
            marginTop: `${
              new Date().getHours() * 60 + new Date().getMinutes()
            }px`,
          }}
        ></span>
      );
    }
  };

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {redLine()}
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          ({ dateFrom }) => new Date(dateFrom).getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            handleEventRemove={handleEventRemove}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dayStart: PropTypes.instanceOf(Date).isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  handleEventRemove: PropTypes.func.isRequired,
};

export default Day;
