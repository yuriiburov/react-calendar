import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({
  weekDates,
  isAnotherMonth,
  eventsList,
  handleEventRemove,
}) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} isAnotherMonth={isAnotherMonth} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            eventsList={eventsList}
            handleEventRemove={handleEventRemove}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  isAnotherMonth: PropTypes.func.isRequired,
  eventsList: PropTypes.array.isRequired,
  handleEventRemove: PropTypes.func.isRequired,
};

export default Calendar;
