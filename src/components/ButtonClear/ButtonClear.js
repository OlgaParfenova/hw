import { Button } from '../Button';

export const ButtonClear = ({ type = 'button', className, ...props }) => (
  <Button {...props} type={type} className={`${className || ''} btnClear`}>
    Clear
  </Button>
);
