import React from "react";
import { MoneyContext } from "./FamilyTree";
import { use } from "react";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h1>Friend</h1>
      <h1>family got : {money}</h1>
    </div>
  );
};

export default Friend;
