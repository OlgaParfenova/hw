import { ButtonSend } from '../ButtonSend';
import { useState } from 'react';

export const MessagesForm = ({ onSubmitCb }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const resetInputField = () => {
    setValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitCb(value);
    resetInputField();
  };

  return (
    <>
      <form className='messagesForm' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder='Write a task ...'
          value={value}
          name='message'
          onChange={handleChange}
        />
        <ButtonSend type='submit' />
      </form>
    </>
  );
};
