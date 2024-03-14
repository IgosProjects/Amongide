// App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router, RouteHome, RouteApp } from './modules/routes'
import Header from './sections/header'
export function Home() {
  return (
    <div className='homecontent'>
      <h1>Welcome to AmongIde</h1>
      <p>Simply better</p>
      <button className="getstartedhtmlbutton"onClick={() => { window.location.pathname = "/ide"; }}>Get Started</button>

    </div>
  );
}

export function Ide() {
  return (
<div>
<header>
  <div>
<Header />
  </div>
</header>
</div>
  );
}


function App() {
  return (
    <Router>
      <RouteHome />
      <RouteApp />
    </Router>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
