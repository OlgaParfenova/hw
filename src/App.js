import { Container } from './components/Container';
import { ButtonClear } from './components/ButtonClear';
import { MessageBox } from './components/MessageBox';
import { MessagesForm } from './components/MessagesForm';
import React from 'react';

export const App = () => {
  const data = [
    { date: '02/05', text: 'do homework', id: 'eftg' },
    { date: '02/05', text: 'watch videos', id: 'feweq' },
    { date: '02/05', text: 'read articles', id: 'frefrg' },
  ];

  return (
    <Container>
      <ButtonClear />
      <MessageBox tasks={data} />
      <MessagesForm />
    </Container>
  );
};
