import React from 'react';

const Field = props => {
  const { label, type, id, placeholder, name, value, error, onChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={`form-control ${error.length > 0 ? 'is-invalid' : ''}`}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error.length > 0 ? <div className="invalid-feedback">{error}</div> : ''}
    </div>
  );
};

export default Field;
