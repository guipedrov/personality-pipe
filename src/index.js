import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

// Sintaxe anterior:
//  ReactDOM.createRoot(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>,
//  );
