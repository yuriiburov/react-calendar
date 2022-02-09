import React, { useEffect } from 'react';

import { days, isCurrentDay } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates, isAnotherMonth }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => {
        useEffect(() => {
          isAnotherMonth(dayDate);
        });
        return (
          <div
            className={`calendar__day-label day-label${
              isCurrentDay(dayDate) ? ' current-day' : ''
            }`}
            key={index}
          >
            <span className="day-label__day-name">
              {days[dayDate.getDay()]}
            </span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
