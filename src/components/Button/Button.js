export const Button = ({ label, className }) => {
  return (
    <button type='button' className={`${className ? className : ''}`}>
      {label}
    </button>
  );
};
