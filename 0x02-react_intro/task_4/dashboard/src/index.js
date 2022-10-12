import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import Notifications from "./Notifications";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);