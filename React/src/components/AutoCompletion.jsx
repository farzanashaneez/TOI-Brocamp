import React, { useState } from 'react';

// Original array (no need to put inside useState)
const arr = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'abdef'];

const AutoCompletion = () => {
  const [search, setSearch] = useState('');

  // Handle search input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter the array based on the search term (case insensitive)
  const filteredArray = arr.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search here"
        onChange={handleChange}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredArray.length > 0 ? (
          filteredArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default AutoCompletion;
