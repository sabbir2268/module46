import "./App.css";
import ControlledField from "./Component/ControlledField/ControlledField";
import FamilyTree from "./Component/FamilyTree/FamilyTree";
import FormAction from "./Component/FormAction/FormAction";
import HookForm from "./Component/HookForm/HookForm";
import ProductForm from "./Component/ProductForm/ProductForm";
import ProductManagement from "./Component/ProductForm/ProductManagement";
import ProductTable from "./Component/ProductForm/ProductTable";
import SimpleForm from "./Component/SimpleForm/SimpleForm";
import Uncontrolled from "./Component/UncontrolledField/Uncontrolled";

function App() {
  return (
    <>
      <div className="text-center mt-20 font-bold">
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        {/* <Uncontrolled></Uncontrolled> */}
        {/* <HookForm></HookForm> */}
        {/* <ProductManagement></ProductManagement> */}
        <FamilyTree></FamilyTree>
      </div>
    </>
  );
}

export default App;
