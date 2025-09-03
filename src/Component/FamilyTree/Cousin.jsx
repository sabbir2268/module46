import Special from "./Special";
import Friend from "./Friend";
import { MoneyContext } from "./FamilyTree";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2 className="text-3xl">{name}</h2>
      {name === "shihab" && <Special asset={asset} />}
      {name === "Habib" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
