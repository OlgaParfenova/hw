export const MessageItem = ({ date, text }) => {
  return (
    <div className='messageItem'>
      <div className='messageDate'>{date}</div>
      <div className='messageText'>{text}</div>
    </div>
  );
};
