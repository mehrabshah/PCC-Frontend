import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';

import UserProfile from './components/UserProfile/UserProfile';
import UserProfileAdmin from './components/Admin/UserProfileAdmin';
import Test1 from './components/Admin/Test1/Test1';
import Test2 from './components/Admin/Test2/Test2';
import Test3 from './components/Admin/Test3/Test3';
import QuestionsTest1 from './components/UserProfile/QuestionsTest1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfileEmployer from './components/Employer/UserProfileEmployer';
import QuestionsTest2 from './components/UserProfile/QuestionsTest2';
import QuestionsTest3 from './components/UserProfile/QuestionsTest3';
import PostJob from './components/Employer/PostJob';
import Reset from './components/ResetPassword/Reset';
import Mail from './components/ResetPassword/Mail';
import NewPassword from './components/ResetPassword/NewPassword';
import Report from './components/UserProfile/Report';
import Personality from './components/UserProfile/Personality';
import CareerList from './components/UserProfile/CareerList';
import { Home } from './UserSide/pages/Home';
import { Signup } from './auth/pages/signup/Signup';
import { Login } from './auth/pages/login/Login';
function App() {
  return (
    <>

               
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Login />}></Route>
           <Route path="/careerlist" element={<CareerList />}></Route>
          <Route path="/admin" element={<UserProfileAdmin />}></Route>
          <Route path="/employer" element={<UserProfileEmployer />}></Route>
          <Route path="/user" element={<UserProfile />}></Route>
          <Route path="/test1" element={<Test1 />}></Route>
          <Route path="/test2" element={<Test2 />}></Route>
          <Route path="/test3" element={<Test3 />}></Route>
          <Route path="/questiontest1" element={<QuestionsTest1 />}></Route>
          <Route path="/questiontest2" element={<QuestionsTest2 />}></Route>
          <Route path="/questiontest3" element={<QuestionsTest3 />}></Route>
          <Route path="/post" element={<PostJob />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/mail" element={<Mail />}></Route>
          <Route path="/newpassword" element={<NewPassword />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/personality" element={<Personality />}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
