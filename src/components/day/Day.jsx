import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({
  dataDay,
  dayEvents,
  monthOfTheDay,
  yearOfTheDay,
  handleEventRemove,
}) => {
  const redLine = () => {
    if (
      dataDay === new Date().getDate() &&
      monthOfTheDay === new Date().getMonth() &&
      yearOfTheDay === new Date().getFullYear()
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

export default Day;
