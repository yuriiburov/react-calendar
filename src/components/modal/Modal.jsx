import React from 'react';

import './modal.scss';

const Modal = ({
  showModalWindow,
  handleTimeChangeFrom,
  handleTimeChangeTo,
  handleDateChange,
}) => {
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={showModalWindow}>
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleDateChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleTimeChangeFrom}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleTimeChangeTo}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
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
