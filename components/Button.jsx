
const Button = ({ btnName, classStyles, handleClick }) => (
  <button
    type="button"
    onClick={() => handleClick()}
    className={`nft-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
  >
    {btnName}
  </button>
);

export default Button;
