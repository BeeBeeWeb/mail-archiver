
import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import { ReactComponent as CalendarIcon } from './assets/icon_calender.svg';
import { ReactComponent as SearchIcon } from './assets/icon_search.svg';

import './App.scss';

import EmailTable from './components/email-table/email-table.component';
import NoResult from './components/no-results/no-results.component';
import { Emails } from './emails-data';

function App() {
  const [dateRange, onDateRangeChange] = useState([new Date(), new Date()]);
  const [filteredEmails, setFilteredEmails] = useState([]);

  React.useEffect(() => {
    const filtered = Emails.filter(email => {
      const [from, to] = dateRange.map(date => date.getTime()).sort();
      return email.date > from && email.date < to;
    });

    setFilteredEmails(filtered);
  }, [dateRange]);

  return (
    <div className="App">
      <div className="calendar-wrap text-left">
        <div className="calendar">
          <DateRangePicker
            clearIcon={null}
            calendarIcon={<CalendarIcon />}
            onChange={onDateRangeChange}
            value={dateRange}
            format="y/M/d"
          />
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <p className="result-count text-left">Results: {filteredEmails.length} mail(s)</p>
      {filteredEmails.length > 0 ? <EmailTable emails={filteredEmails} /> : <NoResult />}
    </div>
  );
}

export default App;
