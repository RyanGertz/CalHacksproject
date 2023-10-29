import React, { useState, useEffect } from 'react';

async function fetchData() {
    const response = await fetch('/mock-data/events.json');
  return await response.json();
}

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data.events));
  }, []);

  useEffect(() => {
    if (query === '') {
      setResults([]);
      return;
    }

    const filtered = data.filter(event => 
      event.location.toLowerCase().includes(query.toLowerCase())
    );

    console.log("Filtered results:", filtered);
    setResults(filtered);
  }, [query, data]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by location..." 
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {results.map((event, index) => (
          <li key={index}>
            Location: {event['location']}, Artist: {event['artist name']}, Event: {event['event name']}, Date: {event['event date']}
          </li>
        ))}
      </ul>
    </div>
  );
}

