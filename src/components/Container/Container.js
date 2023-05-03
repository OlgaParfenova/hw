import { useState } from 'react';

export const Container = ({ children }) => {

  const [values, setValues] = useState([]);

  const handleAddItem = (item) => () => {
    setValues((prevState) => {
      return { ...prevState, item };
    });
  };

  const handleClearItem = () => () => {
    setValues([]);
  };

  return <div className='container'>{children}</div>;
};
