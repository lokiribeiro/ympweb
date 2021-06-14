import React from 'react';
import Main from "./Main";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Yacht Maintenance Program | YMP</title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
