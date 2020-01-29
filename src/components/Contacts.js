import React from 'react';
import Field from './Field';
import Select from './Select';
import Countries from '../data/countries';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      // country: 1,
    };
  }

  render() {
    const { userData, errors, cityList, onChange } = this.props;

    return (
      <div className="step-form">
        <Field
          label="Email"
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          error={errors.hasOwnProperty('email') ? errors.email : ''}
          value={userData.email}
          onChange={onChange}
        />
        <Field
          label="Mobile number"
          type="text"
          id="mobile"
          placeholder="Enter Mobile number"
          name="mobile"
          error={errors.hasOwnProperty('mobile') ? errors.mobile : ''}
          value={userData.mobile}
          onChange={onChange}
        />

        <Select
          label="Choose country"
          name="country"
          id="country"
          list={Countries}
          active={userData.country}
          onChange={onChange}
          error={errors.hasOwnProperty('country') ? errors.country : ''}
          disabled={false}
          selected={userData.country}
        />

        <Select
          label="Choose city"
          name="city"
          id="city"
          list={cityList}
          onChange={onChange}
          active={userData.city}
          error={errors.hasOwnProperty('city') ? errors.city : ''}
          disabled={cityList.length > 0 ? false : true}
        />
      </div>
    );
  }
}

export default Contacts;
