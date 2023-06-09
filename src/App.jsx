import React from "react";
import Multiselect from "./Multiselect";
import "./App.css";
const App = () => {
  const options = ["Afghanistan","Argentina","Australia","Bangladesh","Bhutan","Brazil","China","Denmark","Egypt","France","West Indies","Germany","Hong Kong","Iceland","India","Indonesia","Ireland","Israel","Italy","Japan","Maldives","Mexico","Nepal","Netherlands","New Zealand","Pakistan","Portugal","Russia","Singapore","South Africa","South Korea","Spain","Sri Lanka","Switzerland","Thailand","Ukraine","UK","USA","Zimbabwe"
];
 
  return (
    <div className="body">
      <h3>React Multiselect Dropdown</h3>
      <Multiselect
        options={options}
        value={["India", "Australia"]}
        readonly={false}
      />
    </div>
  );
};

export default App;
