import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import DragDropProj from "./components/DragDropProj/DragDropProj";
import HomePage from "./components/HomePage/HomePage";
import CodeBlocks from "./components/CodeBlock/CodeBlock";
import SelectAndShare from "./components/SelectAndShare/SelectAndShare";

function App() {
  //Passing page name to TopNavigation component via props
  const [pageName, setPageName] = useState("Home");

  const topNavigationPageName = (selectedPage: string) => {
    switch (selectedPage) {
      case "/":
        setPageName("Home");
        break;
      case "/dragdropproject":
        setPageName("Drag & Drop Project");
        break;
      case "/codeblocks":
        setPageName("Code Blocks");
        break;
      case "/selectandshare":
        setPageName("Select & Share");
        break;
      default:
        setPageName("Home");
    }
  };

  return (
    <Router>
      <ScopedCssBaseline>
        <TopNavigation pageName={pageName} topNavigationPageName={topNavigationPageName} />
      </ScopedCssBaseline>
      <Routes>
        <Route path='/dragdropproject' element={<DragDropProj />} />
        <Route path='/codeblocks' element={<CodeBlocks />} />
        <Route path='/selectandshare' element={<SelectAndShare />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
