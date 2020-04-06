import React, { useReducer } from 'react';
import {} from 'antd';
import Calendar from 'rc-year-calendar';
import _ from 'lodash';
import moment from 'moment';

import 'react-calendar-patched/css/bootstrap-theme.css';

interface CalendarData {
  id: number;
  startDate: Date;
  endDate: Date;
  color: string;
}

type ActionType = {
  type: 'add' | 'remove';
};

const initialCalendarData: CalendarData[] = [];

function reducer(calendarData: any, action: any): any {
  switch (action.type) {
    case 'add':
      return [...calendarData, ...action.payload];

    case 'remove':
      return _.differenceBy(calendarData, action.payload, 'id');

    default:
      return calendarData;
  }
}

const CalendarScreen = props => {
  const [cData, dispatch] = useReducer(reducer, initialCalendarData);

  function onRangeSelected(data) {
    console.log(data);

    const { startDate, endDate, events } = data;

    let now = moment(startDate);
    const end = moment(endDate);
    const selectedDateRanges: CalendarData[] = [];

    while (now.isSameOrBefore(end)) {
      const nowDate = now.toDate();
      selectedDateRanges.push({
        id: nowDate.getTime(),
        startDate: nowDate,
        endDate: nowDate,
        color: '#CEE397'
      });
      now.add(1, 'days');
    }

    // Means the event is already showing on calendar UI.
    if (events.length > 0) {
      dispatch({
        type: 'remove',
        payload: events
      });
    }

    const newEventsToAdd = _.differenceBy(selectedDateRanges, events, 'id');

    if (newEventsToAdd.length > 0) {
      dispatch({
        type: 'add',
        payload: newEventsToAdd
      });
    }
  }

  return (
    <>
      <Calendar
        style="background"
        enableRangeSelection={true}
        dataSource={cData}
        onRangeSelected={onRangeSelected}
      />
    </>
  );
};

export default CalendarScreen;
