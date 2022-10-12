import './App.css';
import l0g0 from "./holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";


function App() {
  return (
    <>
      <div className="App-header">
        <img src={l0g0} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </>
  );
}

export default App;
