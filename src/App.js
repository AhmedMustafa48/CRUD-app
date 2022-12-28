import logo from './logo.svg';
import './App.css';
import Navheader from './Components/Navheader';
import { Routes, Route } from 'react-router';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      {/* <Navheader/> */}
    <Routes>
      <Route exact path="/" element={ <UserList/> } />
      <Route path="add-user" element ={ <AddUser/> } />
      <Route path="/edit/:id" element={ <EditUser/> }/>

    </Routes>
    </div>
  );
}

export default App;
