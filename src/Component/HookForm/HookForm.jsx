import React from "react";
import useInputField from "../../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit :", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black m-4"
          type="text"
          defaultValue={name}
          onChange={nameOnChange}
        />

        <input
          className="border border-black m-4"
          type="email"
          defaultValue={email}
          onChange={emailOnChange}
        />

        <input
          className="border border-black m-4"
          type="password"
          defaultValue={password}
          onChange={passOnChange}
        />

        <input className="border border-black " type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
