import "./styles/button.css";

const Button = ({ label, handleClick }) => {
 return (
  <div className="btn-wrap" onClick={handleClick}>
   <span className="btn">{label}</span>
  </div>
 );
};

export default Button;
