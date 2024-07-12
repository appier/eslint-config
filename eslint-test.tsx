import React from 'react';
import { createRoot } from 'react-dom/client';

const foo = 'bar';

console.log(foo);

function App() {
  return (
    <div
      className={'a b c'}
      onClick={() => {
        //
      }}
    >
      foo
    </div>
  );
}

const domNode = document.querySelector('#root');

if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
