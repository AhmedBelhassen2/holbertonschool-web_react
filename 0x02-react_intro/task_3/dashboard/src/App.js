import './App.css';
import l0g0 from "./holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";


function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={l0g0} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Enter your email:</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="password">Enter your password:</label>
        <input type="password" id="password" name="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
