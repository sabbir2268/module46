import React, { useRef } from "react";

const Uncontrolled = () => {
  // way of collecting data uncontrolledly
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    // console.log(emailRef.current.value);
    console.log(email, pass);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="email" />

        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
