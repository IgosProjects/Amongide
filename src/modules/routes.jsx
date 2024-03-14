// Routes.js
import React, { useState, useEffect } from 'react';
import { Home,Ide } from "../app.jsx";


// If you have other components, import them here
// import About from './About';

const Route = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  return currentPath === path ? component : null;
};

export const Router = ({ children }) => {
  return <>{children}</>;
};

export const RouteHome = () => <Route path="/" component={<Home />} />;
export const RouteApp = () => <Route path="/ide" component={<Ide/>} />;
// Export other routes as needed
// export const RouteAbout = () => <Route path="/about" component={<About />} />;
