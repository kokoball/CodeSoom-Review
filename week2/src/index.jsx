import React, { useState } from 'react';
import ReactDom from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>

  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <Page
      count={count}
      handleClick={handleClick}
    />
  )



}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
