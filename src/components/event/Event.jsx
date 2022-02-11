import React, { useState } from 'react';

import events from '../../gateway/events';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, onClick }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event" event-data={id} onClick={onClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
