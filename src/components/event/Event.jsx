import React, { useState } from 'react';

import events from '../../gateway/events';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, handleEventRemove }) => {
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

export default Event;
