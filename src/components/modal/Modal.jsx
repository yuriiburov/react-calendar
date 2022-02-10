import React from 'react';

import './modal.scss';

const Modal = ({
  handleTitleChange,
  valueTitle,
  handleDateChange,
  valueDate,
  handleTimeChangeFrom,
  valueFrom,
  handleTimeChangeTo,
  valueTo,
  handleDescriptionChange,
  valueDescription,
  handleSubmit,
  showModalWindow,
}) => {
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={showModalWindow}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleTitleChange}
              value={valueTitle}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleDateChange}
                value={valueDate}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleTimeChangeFrom}
                value={valueFrom}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleTimeChangeTo}
                value={valueTo}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleDescriptionChange}
              value={valueDescription}
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
