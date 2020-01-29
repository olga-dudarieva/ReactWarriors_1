import React from 'react';
import Step from './Step';
import Controls from './Controls';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Cities from '../data/cities';
import Finish from './Finish';
import countries from '../data/countries';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      userData: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: '',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: '',
      },
      cityList: [],
      errors: {},
    };
  }

  steps = ['Basic', 'Contacts', 'Avatar', 'Finish'];

  render() {
    const getCityList = countryName => {
      let countryId = 0;
      countries.map(country => {
        if (country.name === countryName) {
          countryId = country.id;
        }
        return countryId;
      });
      let cityListTemp = [];
      for (let key in Cities) {
        const city = {};
        if (Cities[key].country === countryId) {
          city.id = key;
          city.name = Cities[key].name;
          cityListTemp = [...cityListTemp, city];
        }
      }
      this.setState({
        cityList: cityListTemp,
      });
    };

    const changeValue = e => {
      const name = e.target.name;
      const val = e.target.value;
      const newErrors = this.state.errors;
      delete newErrors[name];
      this.setState(prevState => ({
        userData: {
          ...prevState.userData,
          [name]: val,
        },
        errors: newErrors,
      }));
      if (name === 'country') {
        getCityList(val);
      }
    };

    const loadMyFile = e => {
      let reader = new FileReader();

      reader.onload = () => {
        this.setState(prevState => ({
          userData: {
            ...prevState.userData,
            avatar: reader.result,
          },
        }));
      };

      reader.readAsDataURL(e.target.files[0]);
    };

    const setErrors = errors => {
      if (Object.keys(errors).length > 0) {
        this.setState({
          errors: errors,
        });
        return false;
      } else {
        this.setState({
          errors: {},
        });
        return true;
      }
    };

    const basicValidation = () => {
      let errors = {};
      if (this.state.userData.firstname.length < 5) {
        errors.firstname = 'Must be 5 characters or more';
      }
      if (this.state.userData.lastname.length < 5) {
        errors.lastname = 'Must be 5 characters or more';
      }
      if (this.state.userData.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      }
      if (
        this.state.userData.repeatPassword.length === 0 ||
        this.state.userData.repeatPassword !== this.state.userData.password
      ) {
        errors.repeatPassword = 'Must be equal password';
      }
      if (this.state.userData.gender.length === 0) {
        errors.gender = 'Required';
      }

      return setErrors(errors);
    };

    const contactsValidation = () => {
      let errors = {};
      var mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let mobileRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

      if (!mailRegex.test(this.state.userData.email)) {
        errors.email = 'Email mast be correct';
      }

      if (!mobileRegex.test(this.state.userData.mobile)) {
        errors.mobile = 'Valid formats: (123) 456-7890, 1234567890';
      }

      if (this.state.userData.country.length === 0) {
        errors.country = 'Required';
      }

      if (this.state.userData.city.length === 0) {
        errors.city = 'Required';
      }

      return setErrors(errors);
    };

    const avatarValidation = () => {
      let errors = {};
      if (this.state.userData.avatar.length === 0) {
        errors.avatar = 'Required';
      }
      return setErrors(errors);
    };

    let currentValidation = '';

    if (this.state.activeStep === 0) {
      currentValidation = basicValidation;
    }

    if (this.state.activeStep === 1) {
      currentValidation = contactsValidation;
    }

    if (this.state.activeStep === 2) {
      currentValidation = avatarValidation;
    }

    const nextStep = () => {
      if (currentValidation()) {
        this.setState({
          activeStep: this.state.activeStep + 1,
        });
      }
    };

    const previosStep = () => {
      this.setState({
        activeStep: this.state.activeStep - 1,
      });
    };

    const resetForm = () => {
      this.setState({
        userData: {
          firstname: '',
          lastname: '',
          password: '',
          repeatPassword: '',
          gender: '',
          email: '',
          mobile: '',
          country: '',
          city: '',
          avatar: '',
        },
        activeStep: 0,
        cityList: [],
        errors: {},
      });
      console.log('state', this.state.userData);
    };

    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            {this.steps.map((step, i) => (
              <Step
                key={i}
                i={i}
                step={step}
                activeStep={this.state.activeStep}
              />
            ))}
          </div>

          {this.state.activeStep === 0 ? (
            <Basic
              userData={this.state.userData}
              errors={this.state.errors}
              onChange={changeValue}
            />
          ) : null}

          {this.state.activeStep === 1 ? (
            <Contacts
              userData={this.state.userData}
              errors={this.state.errors}
              onChange={changeValue}
              cityList={this.state.cityList}
            />
          ) : null}

          {this.state.activeStep === 2 ? (
            <Avatar
              error={
                this.state.errors.hasOwnProperty('avatar')
                  ? this.state.errors.avatar
                  : ''
              }
              onChange={loadMyFile}
              id="customFile"
              label="Choose file"
              name="avatar"
              avatar={this.state.userData.avatar}
            />
          ) : null}

          {this.state.activeStep === 3 ? (
            <Finish user={this.state.userData} />
          ) : null}

          <Controls
            length={this.steps.length}
            activeStep={this.state.activeStep}
            nextStep={nextStep}
            previosStep={previosStep}
            resetForm={resetForm}
          />
        </form>
      </div>
    );
  }
}
