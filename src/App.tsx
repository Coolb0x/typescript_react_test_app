import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestFunctions from "./components/TestFunctions/TestFunctions";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import DragDropProj from "./components/DragDropProj/DragDropProj";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [count, setCount] = useState(0);
  const [pageName, setPageName] = useState("Home");

  function Users() {
    setPageName("Users");
    return <h2>Users</h2>;
  }

  return (
    <Router>
      <ScopedCssBaseline>
        <TopNavigation pageName={pageName} />
      </ScopedCssBaseline>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <TestFunctions />
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dragdropproject'>Drag and Drop</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/dragdropproject' element={<DragDropProj />} />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
