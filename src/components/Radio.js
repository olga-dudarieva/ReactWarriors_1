import React from 'react';

const Radio = props => {
  const { name, id, value, label, checked, isInvalid, onChange } = props;

  return (
    <div className="form-check-inline">
      <input
        className={`form-check-input ${isInvalid ? 'is-invalid' : ''}`}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
