import { Button } from '../Button';

export const ButtonSend = ({ type = 'button', className, ...props }) => (
  <Button {...props} type={type} className={`${className || ''} btnSend`}>
    Send
  </Button>
);
