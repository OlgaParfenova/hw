import { ButtonSend } from '../ButtonSend';

export const MessagesForm = () => {
  return (
    <>
      <form>
        <input className='typography' placeholder='Write a message ...' />
        <ButtonSend />
      </form>
    </>
  );
};
