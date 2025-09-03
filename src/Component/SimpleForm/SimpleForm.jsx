import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops form from reloading the page
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="name"
        />
        <input
          className="border border-black rounded-sm"
          type="email"
          name="email"
        />
        <br />
        <input className="btn-secondary btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
