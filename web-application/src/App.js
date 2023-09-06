import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import JListUser from './components/JListUser';
import JEditUser from './components/JEditUser';
import JCreateUser from './components/JCreateUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import CCreateUser from './components/CCreateUser';
import CEditUser from './components/CEditUser';
import CListUser from './components/CListUser';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import JLogin from './components/JLogin';
import JForm from './components/JForm';
import CForm from './components/CForm';
import CLogin from './components/CLogin';
import ALogin from './components/ALogin';
import AdminHome from './components/AdminHome';
import JAppoinment from './components/JAppoinments';
import ListUser from './components/ListUser';
import JobSeekerInfo from './components/JobSeekerInfo';
import ConsultantInfo from './components/ConsultantInfo';
import CRegister from './components/CRegister';
import JSRegister from './components/JSRegister';
import AppoinmentList from './components/AppoinmentList';

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
       
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="user1/create" element={<JCreateUser/>} />
          <Route path="user1/:id/edit" element={<JEditUser/>} />
          <Route path="user1/list" element={<JListUser/>} />

          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
          <Route path="/alist" element={<ListUser />} />
          

          <Route path="user2/create" element={<CCreateUser/>} />
          <Route path="user2/:id/edit" element={<CEditUser/>} />
          <Route path="user2/list" element={<CListUser/>} />

          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />

          <Route path="/jlogin" element={<JLogin/>} />
          <Route path="/jform" element={<JForm/>} />

          <Route path="/clogin" element={<CLogin/>} />
          <Route path="/cform" element={<CForm/>} />

          <Route path="/alogin" element={<ALogin/>} />
          <Route path="/ahome" element={<AdminHome/>} />

          <Route path="/jappoinment" element={<JAppoinment/>} />
          <Route path="/jinfo" element={<JobSeekerInfo/>} />

          <Route path="/cinfo" element={<ConsultantInfo/>} />
          <Route path="/creg" element={<CRegister/>} />
          <Route path="/jsreg" element={<JSRegister/>} />

          <Route path="/aplist" element={<AppoinmentList/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;