import React from 'react';
import PropTypes from 'prop-types';

import './event.scss';

const Event = ({ eventData, handleEventRemove }) => {
  const { id, height, marginTop, title, time } = eventData;

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className="event"
      event-data={id}
      onClick={handleEventRemove}
    >
      <div className="event__title" event-data={id}>
        {title}
      </div>
      <div className="event__time" event-data={id}>
        {time}
      </div>
    </div>
  );
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
  handleEventRemove: PropTypes.func.isRequired,
};

export default Event;
