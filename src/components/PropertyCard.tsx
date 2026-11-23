
import "../styles/Home.css";

const SearchFilters = () => {
  return (
    <div className="filters-container">
      <input type="text" placeholder="Search by location..." />
      <select>
        <option>Property Type</option>
        <option>House</option>
        <option>Apartment</option>
        <option>Plot</option>
      </select>
      <select>
        <option>Price Range</option>
        <option>Below 1 Crore</option>
        <option>1 Crore - 3 Crore</option>
        <option>Above 3 Crore</option>
      </select>
      <button className="filter-btn">Search</button>
    </div>
  );
};

export default SearchFilters;
