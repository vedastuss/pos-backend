import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Auth, Orders, Tables, Menu} from './pages';
import Header from './components/shared/Header';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="+" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      {/* <h1 className="text-red-500 underline">Hello World</h1> */}
    </>
  );
}

export default App;