import logo from './logo.svg';
import './App.css';
import Addition from './component/Addition';
import StudentList from './component/StudentList';
import Login from './component/Login';
import AcademicUnit from './component/AcademicUnit';
import { Route, Routes } from 'react-router-dom';

function App() {
  let name = "Jesse";
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      {/* <Addition />
      <StudentList /> */}
      <AcademicUnit />

      <Routes>
      <Login />
        <Route path={"/"} element={<Login/>}></Route>
        <Route path={"/studentList"} element={<StudentList/>}></Route>
        <Route path={"/addition"} element={<Addition/>}></Route>
        <Route path={"/academicUnit"} element={<AcademicUnit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
