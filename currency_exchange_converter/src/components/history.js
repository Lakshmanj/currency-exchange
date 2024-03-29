import React from 'react';

const History = ({ conversions }) => {
  return (
    <ul>
      {conversions.map((conversion, index) => (
        <li key={index}>
          {/* Your conversion details go here */}
        </li>
      ))}
    </ul>
  );
};

export default History;
