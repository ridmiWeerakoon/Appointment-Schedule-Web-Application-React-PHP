import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img7 from "./images/img7.png";
import { Link } from "react-router-dom";

export default function JSRegister() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:80/api6/user/save", inputs).then(function (response) {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div className="container">
          <Link to="/registration">
        <img
          src={img7}
          alt="Image"
          style={{ height: "50px", width: "50px", marginRight: "-1000px" }}
        />
      </Link>
      <h1>Job Seeker Registration Form</h1><br/>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3" style={{textAlign:"left"}}>
          <label htmlFor="name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={inputs.name}
          />
        </div>
        <div className="mb-3" style={{textAlign:"left"}}>
          <label htmlFor="username" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            value={inputs.username}
          />
        </div>
        <div className="mb-3" style={{textAlign:"left"}}>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />
        </div>
        <div className="mb-3" style={{textAlign:"left"}}>
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
          />
        </div>
        <div className="mb-3" style={{textAlign:"left"}}>
          <label htmlFor="category" className="form-label">
         Job Category:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
            value={inputs.specialization}
          />
        </div><br/>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" style={{width:"1110px"}}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
