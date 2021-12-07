import logo from './logo.svg';
import './App.css';
import testImportExport from './testImportExport';
import {A, C} from './testIEforObject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>測試一下</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

testImportExport()
C("kunz")

export default App;
