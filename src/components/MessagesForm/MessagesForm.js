import { ButtonSend } from '../ButtonSend';

export const MessagesForm = () => {
  return (
    <>
      <form className='messagesForm'>
        <input className='input' placeholder='Write a message ...' />
        <ButtonSend />
      </form>
    </>
  );
};
