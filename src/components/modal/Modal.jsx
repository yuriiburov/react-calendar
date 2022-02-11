import React, { useEffect, useState } from 'react';

import events from '../../gateway/events';

// import { createEvent } from '../../gateway/eventsGateway';

import './modal.scss';

const Modal = ({ showModalWindow, newEvent }) => {
  // state
  const [modalData, setModalData] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [modalDateTime, setModalDateTime] = useState('');
  const [modalTimeFrom, setModalTimeFrom] = useState('');
  const [modalTimeTo, setModalTimeTo] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  // work with event data
  // const handleEventSubmit = (e) => {
  //   e.preventDefault();
  //   setModalData({
  //     title: titleText,
  //     description: descriptionText,
  //     dateFrom: new Date(`${modalDateTime} ${modalTimeFrom}`),
  //     dateTo: new Date(`${modalDateTime} ${modalTimeTo}`),
  //   });
  // };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    newEvent({
      title: titleText,
      description: descriptionText,
      dateFrom: new Date(`${modalDateTime} ${modalTimeFrom}`),
      dateTo: new Date(`${modalDateTime} ${modalTimeTo}`),
    });
  };

  // useEffect(() => {
  //   handleEventSubmit;
  //   return () => {
  //     if (modalData !== null) {
  //       events.push(modalData);
  //     }
  //   };
  // });

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={showModalWindow}>
            +
          </button>
          <form className="event-form" onSubmit={handleEventSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={(e) => setTitleText(e.target.value)}
              value={titleText}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={(e) => setModalDateTime(e.target.value)}
                value={modalDateTime}
                required
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={(e) => setModalTimeFrom(e.target.value)}
                value={modalTimeFrom}
                required
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={(e) => setModalTimeTo(e.target.value)}
                value={modalTimeTo}
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={(e) => setDescriptionText(e.target.value)}
              value={descriptionText}
            />
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
