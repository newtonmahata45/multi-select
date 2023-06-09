// import React, { useState } from 'react';

// const Multiselect = ({ value, readonly }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedValues, setSelectedValues] = useState(value);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleSelection = (event) => {
//     event.stopPropagation();
//   };

//   const handleCheckboxChange = (event) => {
//     const selectedOption = parseInt(event.target.value);
//     let updatedValues;

//     if (selectedValues.includes(selectedOption)) {
//       updatedValues = selectedValues.filter((value) => value !== selectedOption);
//     } else {
//       updatedValues = [...selectedValues, selectedOption];
//     }

//     setSelectedValues(updatedValues);
//   };

//   return (
//     <div className="multiselect">
//       <div className="select-box" onClick={toggleDropdown}>
//         <div className="selected-values">
//           {selectedValues.length > 0 ? (
//             selectedValues.map((value) => (
//               <span key={value}>{`Option ${value}`}</span>
//             ))
//           ) : (
//             <span>Select options</span>
//           )}
//         </div>
//         <div className="dropdown-icon">
//           <i className={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
//         </div>
//       </div>
//       {dropdownOpen && (
//         <div className="options">
//           <label>
//             <input
//               type="checkbox"
//               value="1"
//               checked={selectedValues.includes(1)}
//               onChange={handleCheckboxChange}
//               disabled={readonly}
//             />
//             Option 1
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="2"
//               checked={selectedValues.includes(2)}
//               onChange={handleCheckboxChange}
//               disabled={readonly}
//             />
//             Option 2
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="3"
//               checked={selectedValues.includes(3)}
//               onChange={handleCheckboxChange}
//               disabled={readonly}
//             />
//             Option 3
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Multiselect;
import React, { useState } from 'react';

const Multiselect = ({ options, value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value);
  const [searchValue, setSearchValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;
    if (checked) {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, checkboxValue]);
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((val) => val !== checkboxValue)
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <div className='multiselect'>
    <div className="search-bar" >
      <i className={`fas fa-search`}></i>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
         <div className="selected-values">
            {selectedValues.length > 0 ? (
            selectedValues.map((value) => (
              <span key={value}>{value}, </span>
            ))
          ) : (
            <span>No country Selected </span>
          )}
        </div>
      <div className="select-box" onClick={()=>setDropdownOpen(!dropdownOpen)}>
        <span>Select from dropdown</span>
        <div className="dropdown-icon">
          <i className={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
        </div>
      </div>
      {dropdownOpen && filteredOptions.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedValues.includes(option)}
            disabled={readonly}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Multiselect;
