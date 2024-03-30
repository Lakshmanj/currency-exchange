import React from 'react';

const History = ({ conversions }) => {
  return (
    <ul>
      {conversions.map((conversion, index) => (
        <li key={index}>
          {/* We will enter past conversions here for users, however, currently we cannot resolve errors with the UseHistory*/}
        </li>
      ))}
    </ul>
  );
};

export default History;
