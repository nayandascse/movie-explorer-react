import { useState } from "react";

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const value = query.trim();
    value ? onSearch(value) : onClear();
  };

  const clear = () => {
    setQuery("");
    onClear();
  };

  return (
    <form className="search-form" onSubmit={submit}>
      <div className="search-box">
        <span>🔍</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie or TV show..." />
        {query && <button type="button" className="clear-search" onClick={clear}>✕</button>}
      </div>
      <button className="search-button" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;