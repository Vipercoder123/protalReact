import "./Dropdown.css";

const Dropdown = () => {
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
        <span className="heading">Sort by Date</span>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">
          Ascending
        </button>
        <button class="dropdown-item" type="button">
          Descending
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
