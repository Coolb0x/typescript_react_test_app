// Check instructions https://react-code-block.netlify.app/usage

import { CodeBlock } from "react-code-block";
import "./CodeBlock.css";

export default function CodeBlocks() {
  const code: string = `
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
      case "/users":
        setPageName("Users");
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

        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
    `;
  const language: string = "js";

  return (
    <>
      <CodeBlock code={code} language={language}>
        <CodeBlock.Code className='codeBlock'>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
    </>
  );
}
