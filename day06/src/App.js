import React from 'react';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Test6 from './components/Test6';
import Test7 from './components/Test7';
import Test4My from './components/Test4My';
import Customer from './customer/Customer';
import Customer2 from './customer2/Customer2';
import Site from './site/Site';

const App = () => {
  return (
    <div>
      <Test4 />
			<hr />
      <Test5 />
			<hr />
      <Test6 />
			<hr />
      <Test7 />
			<hr />
      {/* <hr /> */}
      {/* <Test4My /> */}
      {/* <hr /> */}
      {/* <Customer /> */}
      {/* <Customer2 /> */}
      <Site />
    </div>
  );
};

export default App;