import React from "react";
import { Link } from "react-router-dom";

import "./Button.styles.scss";

// Button Component
// receives multiple props
// returns one of many button renders dependent on props
const Button = ({
  href,
  size,
  classes,
  inverse,
  danger,
  children,
  to,
  exact,
  type,
  onClick,
  disabled,
}) => {
  if (href) {
    return (
      <a
        className={`button button--${size || "default"} ${
          inverse && "button--inverse"
        } ${danger && "button--danger"}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`button button--${size || "default"} ${
          inverse && "button--inverse"
        } ${danger && "button--danger"}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${classes} button--${size || "default"} ${
        inverse && "button--inverse"
      } ${danger && "button--danger"}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
