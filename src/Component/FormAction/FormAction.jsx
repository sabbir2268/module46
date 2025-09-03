import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <form
        action={handleFormAction}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-black"
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-black"
        />
        <input type="submit" value="Submit" className="btn mt-5" />
      </form>
    </div>
  );
};

export default FormAction;
