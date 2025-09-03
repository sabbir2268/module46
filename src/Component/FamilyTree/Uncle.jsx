import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle Component</h2>
      <section className="flex">
        <Cousin name="John" />
        <Cousin name="Jane" />
      </section>
    </div>
  );
};

export default Uncle;
