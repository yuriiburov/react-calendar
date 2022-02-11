import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import {
  fetchEventsList,
  createEvent,
  deleteEvent,
} from './gateway/eventsGateway.js';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  // state
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [eventsList, setEventsList] = useState([]);

  // array of dates for each week
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

  // for show one or two month in header
  const isAnotherMonth = (dayDate) => {
    dayDate.getMonth() !== getWeekStartDate(weekStartDate).getMonth()
      ? setCurrentMonth(dayDate.getMonth())
      : setCurrentMonth(null);
  };

  // show window for create event
  const showModalWindow = () => {
    setIsShowModal(!isShowModal);
  };

  // === work with server

  // show events when site open
  useEffect(() => {
    fetchEventsList().then((listEvents) => {
      setEventsList(listEvents);
    });
  }, []);

  // share new event to server
  const newEvent = (eventData) =>
    createEvent(eventData).then((response) => {
      if (!response.ok) {
        alert("Internal Server Error. Can't create event");
      }
      fetchEventsList().then((listEvents) => {
        setEventsList(listEvents);
      });
    });

  // remove event from server
  const handleEventRemove = (e) => {
    setEventsList(
      eventsList.filter(({ id }) => {
        if (id === e.target.attributes[1].nodeValue) {
          deleteEvent(id).then((response) => {
            if (!response.ok) {
              alert("Internal Server Error. Can't delete event");
            }
          });
        }
        return id !== e.target.attributes[1].nodeValue;
      })
    );
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
        <Modal showModalWindow={showModalWindow} newEvent={newEvent} />
      )}
      <Calendar
        weekDates={weekDates}
        isAnotherMonth={isAnotherMonth}
        eventsList={eventsList}
        handleEventRemove={handleEventRemove}
      />
    </>
  );
};

export default App;
