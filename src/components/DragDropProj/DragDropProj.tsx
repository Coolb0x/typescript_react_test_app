// Check instructions https://react-code-block.netlify.app/usage

import { CodeBlock } from "react-code-block";

export default function DragDropProj() {
  const code: string = `
    const welcomeMessage = "Hello,";
    let target = "world!";
    
    function greet(target) {
      console.log(welcomeMessage + " " + target);
    }
    
    greet(target);
    
    for (let i = 0; i < 5; i++) {
      console.log("Count: {i}");
    }
    `;
  const language: string = "js";

  return (
    <>
      <CodeBlock code={code} language={language}>
        <CodeBlock.Code className='bg-black'>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
    </>
  );
}
