const Button = ({ className, label, handleClick }) => {
  return (
    <input
      className={className}
      type="button"
      value={label}
      onClick={handleClick}
    />
  );
};

export default Button;
