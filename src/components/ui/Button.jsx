const Button = ({children, onClick}) => {

  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );

};

export default Button;