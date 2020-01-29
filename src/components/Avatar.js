import React from 'react';

const Avatar = props => {
  const { onChange, id, label, name, error, avatar } = props;

  return (
    <div className="form-group">
      <div className="custom-file mb-3">
        <input
          type="file"
          className={`custom-file-input ${
            error.length > 0 ? 'is-invalid' : ''
          }`}
          id={id}
          onChange={onChange}
          name={name}
        />
        <label className="custom-file-label" htmlFor={id}>
          {label}
        </label>
        {error.length > 0 ? (
          <div className="invalid-feedback">{error}</div>
        ) : (
          ''
        )}
      </div>
      {avatar.length > 0 ? (
        <img src={avatar} width="100%" alt="" />
      ) : (
        <img
          src="https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"
          width="100%"
          alt=""
        />
      )}
    </div>
  );
};

export default Avatar;
