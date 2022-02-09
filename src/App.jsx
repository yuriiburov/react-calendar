import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  // state
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  //
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  // functions for change week
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

  // for button 'Today'
  const onShowCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  // for show one or two month
  const isAnotherMonth = (dayDate) => {
    if (dayDate.getMonth() !== getWeekStartDate(weekStartDate).getMonth()) {
      setCurrentMonth(dayDate.getMonth());
    } else {
      setCurrentMonth(null);
    }
  };

  //
  const showModalWindow = () => {
    setIsShowModal(!isShowModal);
  };

  // work with event data
  const handleTimeChangeFrom = (e) => {
    console.log('from ' + e.target.value, typeof e.target.value);
  };

  const handleTimeChangeTo = (e) => {
    console.log('to ' + e.target.value, typeof e.target.value);
  };

  const handleDateChange = (e) => {
    console.log('date ' + e.target.value, new Date(e.target.value));
  };

  return (
    <>
      <Header
        weekStart={weekStartDate}
        prevWeek={handlePrevWeek}
        nextWeek={handleNextWeek}
        showCurrentWeek={onShowCurrentWeek}
        currentMonth={currentMonth}
        showModalWindow={showModalWindow}
      />
      {isShowModal && (
        <Modal
          handleTimeChangeFrom={handleTimeChangeFrom}
          handleTimeChangeTo={handleTimeChangeTo}
          handleDateChange={handleDateChange}
          showModalWindow={showModalWindow}
        />
      )}
      <Calendar
        weekDates={weekDates}
        weekStartDate={weekStartDate}
        isAnotherMonth={isAnotherMonth}
      />
    </>
  );
};

export default App;
