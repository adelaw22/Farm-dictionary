import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App=()=> {
  return (
    <Router>
      <div style={{ height: 100 + '%' }}>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/Details' element={<Details/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
