import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobLists from './containers/jobList';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <JobLists />
      </div>
    </Provider>
  );
}

export default App;
