import React from 'react';
import { months, getWeekStartDate } from '../../utils/dateUtils';
import './header.scss';

const Header = ({
  weekStart,
  prevWeek,
  nextWeek,
  showCurrentWeek,
  currentMonth,
}) => {
  const showMonth = () => {
    if (currentMonth === null) {
      return months[getWeekStartDate(weekStart).getMonth()];
    }

    if (
      getWeekStartDate(weekStart).getMonth() < currentMonth ||
      currentMonth === 0
    ) {
      return (
        months[getWeekStartDate(weekStart).getMonth()] +
        ' - ' +
        months[currentMonth]
      );
    } else if (getWeekStartDate(weekStart).getMonth() > currentMonth) {
      return (
        months[currentMonth] +
        ' - ' +
        months[getWeekStartDate(weekStart).getMonth()]
      );
    }
  };

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={showCurrentWeek}
        >
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{showMonth()}</span>
      </div>
    </header>
  );
};

export default Header;
