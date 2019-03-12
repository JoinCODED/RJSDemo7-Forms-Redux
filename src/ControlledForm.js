import React, { useState } from "react";

import { connect } from "react-redux";
import { submitPerson } from "./redux/actions";

const ControlledForm = ({ submitPerson, errors }) => {
  const [person, setPerson] = useState({
    alias: "",
    description: "",
    email: "",
  });

  const resetForm = () => setPerson({ alias: "", description: "", email: "" });

  const handleChange = (e) =>
    setPeron({ ...person, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPerson(person, resetForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Alias*</span>
        </div>
        <input
          type="text"
          className={`form-control ${errors.alias && "is-invalid"}`}
          name="alias"
          value={person.alias}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.alias}</div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Description</span>
        </div>
        <input
          type="text"
          className={`form-control ${errors.description && "is-invalid"}`}
          name="description"
          value={person.description}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.description}</div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">E-Mail*</span>
        </div>
        <input
          type="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          name="email"
          value={person.email}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>
      <input className="btn btn-outline-dark" type="submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitPerson: (person, reset) => dispatch(submitPerson(person, reset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);
