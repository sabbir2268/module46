import React, { useState } from "react";

const ControlledField = () => {
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass);

    // error after submit
    if (pass.length < 6) {
      setPassError("Password must be 6 characters");
    } else {
      setPassError("");
    }
  };

  const handlePassOnChange = (e) => {
    console.log(e.target.value);
    setPass(e.target.value);

    // ontype error
    // if (pass.length < 6) {
    //   setPassError("Password must be 6 character long");
    // } else {
    //   setPassError("");
    // }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          name="name"
          id="3"
          defaultValue={name}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          onChange={handleEmailChange}
          name="email"
          id="1"
          defaultValue={email}
          placeholder="Your Email"
          required
        />

        <input
          type="password"
          name="password"
          id="2"
          placeholder="Current password"
          defaultValue={pass}
          onChange={handlePassOnChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>

      <p>
        <small>{passError}</small>
      </p>
    </div>
  );
};

export default ControlledField;
