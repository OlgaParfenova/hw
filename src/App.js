import { Container } from './components/Container';
import { ButtonClear } from './components/ButtonClear';
import { MessageBox } from './components/MessageBox';
import { MessagesForm } from './components/MessagesForm';
import React, { useState } from 'react';
import uuid from 'react-uuid';

const data = [
  { date: '02/05', text: 'do homework', id: 'eftg' },
  { date: '02/05', text: 'watch videos', id: 'feweq' },
  { date: '02/05', text: 'read articles', id: 'frefrg' },
];

export const App = () => {
  const [value, setValue] = useState(data);

  const handleClear = () => {
    setValue([]);
  };

  const handleAdd = (body) => {
    const date = new Date();
    const customDate = date.toLocaleDateString();
    const id = uuid();

    const newItem = {
      date: customDate,
      text: body,
      id,
    };

    setValue((prevState) => {
      return [...prevState, newItem];
    });
  };

  return (
    <Container>
      <ButtonClear onClick={handleClear} />
      <MessageBox tasks={value} />
      <MessagesForm onSubmitCb={handleAdd} />
    </Container>
  );
};
