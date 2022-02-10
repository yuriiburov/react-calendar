import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import events from './gateway/events.js';

import './common.scss';

const App = () => {
  // state
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [modalDateTime, setModalDateTime] = useState('');
  const [modalTimeFrom, setModalTimeFrom] = useState('');
  const [modalTimeTo, setModalTimeTo] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

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
  const handleTitleChange = (e) => {
    setTitleText(e.target.value);
  };

  const handleDateChange = (e) => {
    setModalDateTime(e.target.value);
  };

  const handleTimeChangeFrom = (e) => {
    setModalTimeFrom(e.target.value);
  };

  const handleTimeChangeTo = (e) => {
    setModalTimeTo(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    setModalData({
      id: Math.floor((1 + Math.random()) * 0x10000),
      title: titleText,
      description: descriptionText,
      dateFrom: new Date(`${modalDateTime} ${modalTimeFrom}`),
      dateTo: new Date(`${modalDateTime} ${modalTimeTo}`),
    });
  };

  useEffect(() => {
    handleEventSubmit;
    return () => {
      if (modalData !== null) {
        events.push(modalData);
      }
    };
  });

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
          handleTitleChange={handleTitleChange}
          valueTitle={titleText}
          handleDateChange={handleDateChange}
          valueDate={modalDateTime}
          handleTimeChangeFrom={handleTimeChangeFrom}
          valueFrom={modalTimeFrom}
          handleTimeChangeTo={handleTimeChangeTo}
          valueTo={modalTimeTo}
          handleDescriptionChange={handleDescriptionChange}
          valueDescription={descriptionText}
          handleSubmit={handleEventSubmit}
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
