import React, { useEffect } from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

// import events from '../../gateway/events';

const Hour = ({ dataHour, hourEvents, eventsList, handleEventRemove }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
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
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
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
