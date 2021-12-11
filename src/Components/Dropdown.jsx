import "./Dropdown.css";
import { useState } from "react";

const Dropdown = (props) => {
  const [data, setData] = useState(props.array[0]);

  const domainSort = (val) => {
    props.domainSort(val);
  };

  const Ascending = () => {
    props.ascArray();
  };

  const Descending = () => {
    props.dscArray();
  };

  const updateObj = (val) => {
    domainSort(val);

    setData(val);
  };

  const selectionFunctionValue = (val) => {
    if (props.selectFunction) {
      eval(val + "()");
      setData(val);
    } else updateObj(val);
  };

  return (
    <div class="sortDropdown dropdown">
      <button
        class="dropButton btn dropdown-toggle shadow-none"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="heading">{data}</span>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        {props.array.map((buttonVal) => {
          return (
            <button
              value={buttonVal}
              onClick={(e) => {
                selectionFunctionValue(e.target.value);
              }}
              class="dropdown-item"
              type="button"
            >
              {buttonVal}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
