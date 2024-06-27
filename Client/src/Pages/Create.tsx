import React from "react";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User_details_Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Ensure FontAwesome is correctly imported

const UserDetailsForm: React.FC = () => {
  
  const [Title, setTitle] = useState<string>("");
  const [Firstname, setFirstname] = useState<string>("");
  const [LastName, setLastname] = useState<string>("");
  const [Position, setPosition] = useState<string>("");
  const [Company, setCompany] = useState<string>("");
  const [BusinessArena, setBusinessarena] = useState<string>("");
  const [Employees, setEmployees] = useState<string>("");
  const [Street, setStreet] = useState<string>("");
  const [Info, setInfo] = useState<string>("");
  const [ZipCode, setZipcode] = useState<string>("");
  const [Place, setPlace] = useState<string>("");
  const [Country, setCountry] = useState<string>("");
  const [Code, setCode] = useState<string>("");
  const [PhoneNbr, setPhonenbr] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const people = {
      Title,
      Firstname,
      LastName,
      Position,
      Company,
      BusinessArena,
      Employees,
      Street,
      Info,
      ZipCode,
      Place,
      Country,
      Code,
      PhoneNbr,
      Email,
    };

    console.log("peoples being sent:", people);

    axios
      .post("http://localhost:3006/signup", people)
      .then((result) => console.log(result));
    navigate("/").catch((err) => console.log(err));
  };

  return (
    <div className="page-content">
      <div className="form-v10-content">
        <form
          className="form-detail"
          action="#"
          method="post"
          id="myform"
          onSubmit={handleSubmit}
        >
          <div className="form-left">
            <h2>General Information</h2>
            <div className="form-row">
              <select
                name="title"
                className="input-select"
                defaultValue="title"
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="title" disabled>
                  Title
                </option>
                <option value="businessman">Businessman</option>
                <option value="reporter">Reporter</option>
                <option value="secretary">Secretary</option>
              </select>
              <span className="select-btn">
                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="input-text"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="input-text"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <select
                name="position"
                className="input-select"
                defaultValue="position"
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="position" disabled>
                  Position
                </option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
              <span className="select-btn">
                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </span>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                id="company"
                className="input-text"
                placeholder="Company"
                required
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-3">
                <input
                  type="text"
                  name="business"
                  id="business"
                  className="input-text"
                  placeholder="Business Arena"
                  required
                  onChange={(e) => setBusinessarena(e.target.value)}
                />
              </div>
              <div className="form-row form-row-4">
                <select
                  name="employees"
                  className="input-select"
                  defaultValue="employees"
                  onChange={(e) => setEmployees(e.target.value)}
                >
                  <option value="employees" disabled>
                    Employees
                  </option>
                  <option value="trainee">Trainee</option>
                  <option value="colleague">Colleague</option>
                  <option value="associate">Associate</option>
                </select>
                <span className="select-btn">
                  <FontAwesomeIcon icon={["fas", "chevron-down"]} />
                </span>
              </div>
            </div>
          </div>
          <div className="form-right">
            <h2>Contact Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="street"
                id="street"
                className="input-text"
                placeholder="Street + Nr"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="additional"
                id="additional"
                className="input-text"
                placeholder="Additional Information"
                required
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="input-text"
                  placeholder="Zip Code"
                  required
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <div className="form-row form-row-2">
                <select
                  name="place"
                  className="input-select"
                  defaultValue="place"
                  onChange={(e) => setPlace(e.target.value)}
                >
                  <option value="place" disabled>
                    Place
                  </option>
                  <option value="Street">Street</option>
                  <option value="District">District</option>
                  <option value="City">City</option>
                </select>
                <span className="select-btn">
                  <FontAwesomeIcon icon={["fas", "chevron-down"]} />
                </span>
              </div>
            </div>
            <div className="form-row">
              <select
                name="country"
                className="input-select"
                defaultValue="country"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="country" disabled>
                  Country
                </option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </select>
              <span className="select-btn">
                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="code"
                  id="code"
                  className="input-text"
                  placeholder="Code +"
                  required
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-text"
                  placeholder="Phone Number"
                  required
                  onChange={(e) => setPhonenbr(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="email"
                name="your_email"
                id="your_email"
                className="input-text"
                required
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-checkbox">
              <label className="container">
                <p>
                  I do accept the{" "}
                  <a href="#" className="text">
                    Terms and Conditions
                  </a>{" "}
                  of your site.
                </p>
                <input type="checkbox" name="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="register"
                className="register"
                value="Register Badge"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
