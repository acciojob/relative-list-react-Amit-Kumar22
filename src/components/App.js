import React from 'react';

const App = () => {
  const relatives = ['John', 'Anna', 'Michael', 'Emily'];

  return (
    <div>
      <h2>Diwali Shopping List</h2>
      <ol id='relativeList' key="relativeList">
        {relatives.map((relative, index) => (
          <li id={`relativeListItem${index+1}`} key={`relativeListItem${index+1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
