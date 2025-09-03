import React from "react";
import Special from "./Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2 className="text-3xl">Myself Rehan</h2>
      <Special name="Alex" asset={asset} />
    </div>
  );
};

export default Myself;
