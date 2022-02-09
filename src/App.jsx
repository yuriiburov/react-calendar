import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(null);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleNextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };

  const handlePrevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const onShowCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const isAnotherMonth = (dayDate) => {
    if (dayDate.getMonth() !== getWeekStartDate(weekStartDate).getMonth()) {
      setCurrentMonth(dayDate.getMonth());
    } else {
      setCurrentMonth(null);
    }
  };

  return (
    <>
      <Header
        weekStart={weekStartDate}
        prevWeek={handlePrevWeek}
        nextWeek={handleNextWeek}
        showCurrentWeek={onShowCurrentWeek}
        currentMonth={currentMonth}
      />
      <Calendar
        weekDates={weekDates}
        weekStartDate={weekStartDate}
        isAnotherMonth={isAnotherMonth}
      />
    </>
  );
};

export default App;
