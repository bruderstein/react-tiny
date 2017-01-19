import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row'
import DataDisplay from './DataDisplay';
import { Provider } from 'react-redux';

import store from './store';

// Render our Row component
ReactDOM.render(
  <Row cellCount={5} />,
  document.getElementById('root')
);


// Here we render the Connected(DataDisplay) - here just `DataDisplay`
// We need one <Provider> around our application (any connected component anywhere underneath can
// access the store, so  DataDisplay could render a DataElement component, and DataElement could render a
// Node element, and the Node element could be connected to some action or some data from the store state.
ReactDOM.render(
    <Provider store={store}>
      <DataDisplay />
    </Provider>
  , document.getElementById('app-container'));

