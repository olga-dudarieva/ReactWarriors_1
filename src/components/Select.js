import React from 'react';

const Select = props => {
  const { list, label, name, id, disabled, error, active, onChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
        value={active}
        className={`custom-select custom-select-lg ${
          error.length > 0 ? 'is-invalid' : ''
        }`}>
        <option value={0}>{label}</option>
        {list.map(item => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {error.length > 0 ? <div className="invalid-feedback">{error}</div> : ''}
    </div>
  );
};

export default Select;
