import logo from './logo.svg';
import './App.css';
import Addition from './component/Addition';


function App() {
  let name = "Jesse";
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <Addition />
    </div>
  );
}

export default App;
