import React from "react";
import Cousin from "./Cousin";
import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const addMoney = () => {
    setMoney(money + 500);
  };

  return (
    <div>
      <h2>Aunt Component</h2>
      <section className="flex">
        <Cousin asset={asset} name="shihab" />
        <Cousin name="Habib" />
      </section>
      <button className="btn btn-primary" onClick={addMoney}>
        Add 500 TK
      </button>
    </div>
  );
};

export default Aunt;
