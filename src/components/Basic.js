import React from 'react';
import Field from './Field';
import Radio from './Radio';

const Basic = props => {
  const { userData, errors, onChange } = props;

  return (
    <div className="step-form">
      <Field
        label="Firstname"
        type="text"
        id="firstname"
        placeholder="Enter firstname"
        name="firstname"
        error={errors.hasOwnProperty('firstname') ? errors.firstname : ''}
        value={userData.firstname}
        onChange={onChange}
      />
      <Field
        label="Lastname"
        type="text"
        id="lastname"
        placeholder="Enter lastname"
        name="lastname"
        error={errors.hasOwnProperty('lastname') ? errors.lastname : ''}
        value={userData.lastname}
        onChange={onChange}
      />
      <Field
        label="Password"
        type="text"
        id="password"
        placeholder="Enter password"
        name="password"
        error={errors.hasOwnProperty('password') ? errors.password : ''}
        value={userData.password}
        onChange={onChange}
      />
      <Field
        label="Repeat password"
        type="text"
        id="repeatPassword"
        placeholder="Repeat password"
        name="repeatPassword"
        error={
          errors.hasOwnProperty('repeatPassword') ? errors.repeatPassword : ''
        }
        value={userData.repeatPassword}
        onChange={onChange}
      />
      <fieldset className="form-group">
        <div>Gender</div>
        <Radio
          name="gender"
          id="male"
          value="male"
          label="male"
          checked={userData.gender === 'male'}
          onChange={onChange}
          isInvalid={errors.hasOwnProperty('gender') ? true : false}
        />
        <Radio
          name="gender"
          id="female"
          value="female"
          label="female"
          checked={userData.gender === 'female'}
          onChange={onChange}
          isInvalid={errors.hasOwnProperty('gender') ? true : false}
        />
        {errors.hasOwnProperty('gender') ? (
          <div className="invalid-feedback">{errors.gender}</div>
        ) : (
          ''
        )}
      </fieldset>
    </div>
  );
};

export default Basic;
