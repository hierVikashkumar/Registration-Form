import React from "react";
import { withRouter } from "./withRouter";

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

class RegistrationPage extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      showPassword: false,
      phone: "",
      country: "",
      city: "",
      pan: "",
      aadhar: "",

      errors: {},
      isValid: false,
    };
  }

  countries = {
    India: ["Mumbai", "Delhi", "Bangalore"],
    USA: ["New York", "San Francisco", "Chicago"],
    UK: ["London", "Manchester", "Bristol"],
  };

  validate = () => {
    const errors = {};
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      country,
      city,
      pan,
      aadhar,
    } = this.state;

    if (!firstName.trim()) errors.firstName = "First Name is required";
    if (!lastName.trim()) errors.lastName = "Last Name is required";
    if (!username.trim()) errors.username = "Username is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!emailValidator.test(email)) errors.email = "Invalid email";
    if (!password.trim()) errors.password = "Password is required";
    else if (!passwordValidator.test(password))
      errors.password =
        "Password must be 8+ chars, include 1 digit, 1 upper and 1 lowercase.";
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!country) errors.country = "Country is required";
    if (!city) errors.city = "City is required";
    if (!pan.trim()) errors.pan = "PAN is required";
    if (!aadhar.trim()) errors.aadhar = "Aadhar is required";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.navigate("/submitted", { state: { ...this.state } });
    }
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { errors, country } = this.state;

    return (
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="firstName" placeholder="First Name" onChange={this.handleChange} />
          <div className="error">{errors.firstName}</div>

          <input name="lastName" placeholder="Last Name" onChange={this.handleChange} />
          <div className="error">{errors.lastName}</div>

          <input name="username" placeholder="Username" onChange={this.handleChange} />
          <div className="error">{errors.username}</div>

          <input name="email" placeholder="Email" onChange={this.handleChange} />
          <div className="error">{errors.email}</div>

          <div className="password-field">
            <input
              name="password"
              type={this.state.showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.togglePassword}>
              {this.state.showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="error">{errors.password}</div>

          <input name="phone" placeholder="Phone No." onChange={this.handleChange} />
          <div className="error">{errors.phone}</div>

          <select name="country" onChange={this.handleChange}>
            <option value="">Select Country</option>
            {Object.keys(this.countries).map((cty) => (
              <option key={cty} value={cty}>{cty}</option>
            ))}
          </select>
          <div className="error">{errors.country}</div>

          <select name="city" onChange={this.handleChange}>
            <option value="">Select City</option>
            {this.countries[country]?.map((ct) => (
              <option key={ct} value={ct}>{ct}</option>
            ))}
          </select>
          <div className="error">{errors.city}</div>

          <input name="pan" placeholder="PAN No." onChange={this.handleChange} />
          <div className="error">{errors.pan}</div>

          <input name="aadhar" placeholder="Aadhar No." onChange={this.handleChange} />
          <div className="error">{errors.aadhar}</div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RegistrationPage);
