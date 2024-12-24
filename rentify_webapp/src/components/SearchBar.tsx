import React from 'react';
import '../styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // For the magnifier icon (install react-icons if not installed)

const SearchBar = () => {
  return (
    <section className="search-bar">
      <form>
        <div className="search-group">
          <label htmlFor="type">Looking for:</label>
          <select id="type" name="type">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="room">Room</option>
          </select>
        </div>

        <div className="search-group">
          <label htmlFor="location">Where:</label>
          <select id="location" name="location">
            <option value="all-budapest">All Budapest</option>
            <option value="buda">Buda Side</option>
            <option value="pest">Pest Side</option>
            {[...Array(23)].map((_, i) => (
              <option key={i} value={`district-${i + 1}`}>
                District {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="search-group">
          <label htmlFor="min-rent">Min Rent (HUF):</label>
          <input type="number" id="min-rent" name="min-rent" placeholder="e.g., 50000" />

          <label htmlFor="max-rent">Max Rent (HUF):</label>
          <input type="number" id="max-rent" name="max-rent" placeholder="e.g., 200000" />
        </div>

        <div className="search-group advanced-search">
          <button type="button">More Filters</button>
        </div>

        {/* Magnifier icon button */}
        <button type="submit" className="search-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;