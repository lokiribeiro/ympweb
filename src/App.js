import React from 'react';
import Main from "./Main";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Yacht Maintenance Program | Yacht Maintenance Software | YMP</title>
        <meta charset="UTF-8" />
        <meta name="description" content="YMP is a cloud-based yacht maintenance program with yacht crew members and management companies in mind" />
        <meta name="keywords" content="Yacht Maintenance Program, Yacht Maintenance Software, Best Boat Maintenance App, Yacht Management App, Yacht Maintenance App, Yacht Management Software" />
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
