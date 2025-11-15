import React from 'react';
import './Styles/shared.css';

export const FormInput = ({ 
  label, 
  type = 'text', 
  id, 
  name, 
  value, 
  onChange, 
  error,
  required = false 
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        className={error ? 'error' : ''}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export const FormButton = ({ 
  type = 'submit', 
  className, 
  onClick, 
  disabled,
  children 
}) => {
  return (
    <button
      type={type}
      className={`form-button ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const FormError = ({ error }) => {
  if (!error) return null;
  return <div className="form-error">{error}</div>;
};

export const FormDivider = () => (
  <div className="form-divider">
    <span>OR</span>
  </div>
);