import React from 'react';

const DiwaliShoppingList = () => {
  const relatives = ['John', 'Anna', 'Michael', 'Emily'];

  return (
    <div>
      <h2>Diwali Shopping List</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default DiwaliShoppingList;
