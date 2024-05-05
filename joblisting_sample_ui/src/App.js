import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import jobLists from './containers/jobList';

function App() {
  return (
    <Provider>
      <div className="App">
        <jobLists />
      </div>
    </Provider>
  );
}

export default App;
