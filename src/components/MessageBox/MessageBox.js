import { MessageItem } from '../MessageItem';
import React from 'react';

export const MessageBox = ({ tasks }) => {
  const elements = tasks.map((item) => {
    const { date, text, id } = item;
    return (
      <li key={id}>
        <MessageItem date={date} text={text} />
      </li>
    );
  });

  return <ul className='messageBox'>{elements}</ul>;
};
