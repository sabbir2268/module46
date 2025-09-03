import React, { useState } from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

export const AssetContext = React.createContext("");
export const MoneyContext = React.createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);

  const asset = "diamonds";
  const newAsset = "gold";

  return (
    <div className="family-tree">
      <h1 className="text-5xl">Family Tree</h1>
      <h4>Total Family Money: {money}</h4>

      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
