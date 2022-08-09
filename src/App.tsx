import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { CalendarGrid, Dates, Footer, Header } from './components';

const Calendar = styled.div`
  max-width: 740px;
`;

function App(): JSX.Element {
  const [date, setDate] = useState<Date>(new Date('08.08.2022'));

  return (
    <Calendar>
      <Header />
      <Dates date={date} setDate={setDate}></Dates>
      <CalendarGrid />
    </Calendar>
  );
}

export default App;
