import { use } from "react";
import React from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h2 className="text-3xl">Brother</h2>
      <button
        className="btn btn-primary"
        onClick={() => setMoney(money + 1000)}
      >
        Add 1k tk
      </button>
    </div>
  );
};

export default Brother;
