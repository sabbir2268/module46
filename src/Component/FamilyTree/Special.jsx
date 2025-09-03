import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({ name, asset }) => {
  const newAsset = useContext(AssetContext);
  console.log(newAsset);
  return (
    <div>
      <h2 className="text-3xl">
        Special Person: <br /> {name}
      </h2>
      <p>Asset: {asset}</p>
      <p>New Asset: {newAsset}</p>
    </div>
  );
};

export default Special;
