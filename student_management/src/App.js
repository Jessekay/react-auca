import logo from './logo.svg';
import './App.css';
import Addition from './component/Addition';
import StudentList from './component/StudentList';
import Login from './component/Login';

function App() {
  let name = "Jesse";
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      {/* <Addition />
      <StudentList /> */}
      <Login />
    </div>
  );
}

export default App;
