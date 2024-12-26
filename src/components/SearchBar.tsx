import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState("");

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  return (
    <section className="search-bar">
      <div>
        <form className="search-form">
          <div>
            <div className="type">
              <select
                id="propertyType"
                value={propertyType}
                onChange={handlePropertyTypeChange}
              >
                <option value="def" selected hidden>
                  Property Type
                </option>
                <option value="room">Room</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="all">All</option>
              </select>
            </div>
            <div>{/* Search for location */}</div>
            <div className="price"></div>
            <div className="search">
              <button type="submit">
                <FaSearch /> Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
