import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './calendar.css';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);

    let days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<Col key={`empty-${i}`} className="calendar-day empty"></Col>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate &&
                          selectedDate.getDate() === day &&
                          selectedDate.getMonth() === currentMonth &&
                          selectedDate.getFullYear() === currentYear;
      days.push(
        <Col key={day} className={`calendar-day ${isSelected ? 'selected' : ''}`} onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}>
          {day}
        </Col>
      );
    }

    const totalCells = days.length + (7 - (days.length % 7));
    for (let i = days.length; i < totalCells; i++) {
      days.push(<Col key={`empty-end-${i}`} className="calendar-day empty"></Col>);
    }

    let rows = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <Row key={`week-${i / 7}`} className="calendar-week">
          {days.slice(i, i + 7)}
        </Row>
      );
    }

    return rows;
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);

  return (
    <Container className="calendar-container">
      <Row className="calendar-header">
        <Col>
          <Button onClick={prevMonth}>Prev</Button>
        </Col>
        <Col className="text-center">
          {months[date.getMonth()]} {date.getFullYear()}
        </Col>
        <Col className="text-right">
          <Button onClick={nextMonth}>Next</Button>
        </Col>
      </Row>
      <Row className="calendar-days-of-week">
        {daysOfWeek.map(day => (
          <Col key={day} className="calendar-day-of-week">
            {day}
          </Col>
        ))}
      </Row>
      {generateCalendar()}
      <Row className="selected-date-container">
        <Col className="selected-date-text">
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
