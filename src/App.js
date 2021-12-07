import logo from './logo.svg';
import './App.css';
import testImportExport from './testImportExport';
import {A, C} from './testIEforObject';
import ToDoList from './ToDoList';

function MyImg() {
  return ( <img src={logo} className="App-logo" alt="logo" /> )
}

function Greet(props) {
  return ( <p>Hello, {props.name}, Your ID is {props.Id}</p> )
}

function Description() {
  return ( 
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p> 
  )
}

function Test(props) {
  if (props.val > 5) {
    return ( <p style={props.style}>你的資質很好!</p> )
  } else {
    return ( <p>繼續磨練!</p> )
  }
}

function LearnReact(props) {
  return ( 
    <a className={props.class} href={props.https}  target={props.show} rel={props.relSet} > Learn {props.target} </a> 
  )
}

function MyEmail() {
  return (
    <div>My Email is Test@gmail.com</div>
  )
}

function App() {
  if (window.location.pathname === "/") {
    return (
      <div className="App">
        <header className="App-header">
          <MyImg />
          <Greet name="Bob" Id="32" />
          <Description />
          <Test style={{ color: "blue" }} val="7" />
          <LearnReact class="App-link" https="https://reactjs.org" show="_blank" relSet="noopener noreferrer" target="React" />
          <LearnReact class="App-link" https="https://www.google.com.tw/" show="_blank" relSet="" target="Google" />
        </header>
      </div>
    )
  } else if (window.location.pathname === "/about") {
    return (
      <MyEmail />
    )
  } else if (window.location.pathname === "/toDoList") {
    return (
      <ToDoList />
    )
  }
  
}

testImportExport()
A()
C("kunz")

export default App;
