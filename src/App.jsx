import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
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

  return (
    <>
      <Header
        weekStart={weekStartDate}
        prevWeek={handlePrevWeek}
        nextWeek={handleNextWeek}
        showCurrentWeek={onShowCurrentWeek}
      />
      <Calendar weekDates={weekDates} lastDayOfTheWeek={getWeekLastDate} />
    </>
  );
};

export default App;
