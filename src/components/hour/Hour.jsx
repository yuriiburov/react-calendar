import React, { useEffect } from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

// import events from '../../gateway/events';

const Hour = ({ dataHour, hourEvents, events, handleEventRemove }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        // const handleClick = (e) => {
        //   if (Number(e.target.attributes[1].nodeValue) === id) {
        //     events.splice(id - 1, 1);
        //     setEvents(events);
        //   }
        // };

        return (
          <Event
            key={id}
            id={id}
            // calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            handleEventRemove={handleEventRemove}
          />
        );
      })}
    </div>
  );
};

export default Hour;
