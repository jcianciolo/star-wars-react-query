import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import { ReactQueryDevtools } from 'react-query-devtools';


function App() {
  const [page, setPage] = useState('planets');

  // routing function
  const renderSwitch = (page) => {
    switch (page) {
      case ('films'):
        return <Films />;
      case ('people'):
        return <People />;
      case ('starships'):
        return <Starships />;
      case ('species'):
        return <Species />;
      case ('vehicles'):
        return <Vehicles />;
      default:
        return <Planets />;
    }
  }
  return (
    <>
      <div className="App">
        <h1>Star Wars Information</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          { renderSwitch(page) }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
