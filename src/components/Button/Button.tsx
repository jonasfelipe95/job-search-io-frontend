import React from 'react';
import './Button.scss';

interface IButton {
  children?: any;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: any;
  className?: string;
}

const Button = ({ children, width, onClick,className,style, ...props }: IButton) => {
  return (
    <button {...props} type='button' className={`jsi-btn ${className}`} onClick={onClick} style={{ width, ...style }}>
      {children}
    </button>
  );
};

export default Button;
