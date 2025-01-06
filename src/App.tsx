import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestFunctions from "./components/TestFunctions/TestFunctions";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

function App() {
  const [count, setCount] = useState(0);
  const [pageName, setPageName] = useState("Home");

  function Home() {
    setPageName("Home");
    return <h2>Home</h2>;
  }

  function About() {
    setPageName("About");
    return <h2>About</h2>;
  }

  function Users() {
    setPageName("Users");
    return <h2>Users</h2>;
  }

  return (
    <>
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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
