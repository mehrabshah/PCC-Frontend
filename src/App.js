import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile/UserProfile';
import UserProfileAdmin from './components/Admin/UserProfileAdmin';
import Test1 from './components/Admin/Test1/Test1';
import Test2 from './components/Admin/Test2/Test2';
import Test3 from './components/Admin/Test3/Test3';
import QuestionsTest1 from './components/UserProfile/QuestionsTest1';
import HomeRouting from './components/Home/HomeRouting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfileEmployer from './components/Employer/UserProfileEmployer';
import QuestionsTest2 from './components/UserProfile/QuestionsTest2';
import QuestionsTest3 from './components/UserProfile/QuestionsTest3';
function App() {
  return (
    <>  
           <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomeRouting/>}></Route>
                  <Route path="/signup" element={<Signup/>}></Route>
                  <Route path="/signin" element={<Signin/>}></Route> 
                  <Route path="/admin" element={<UserProfileAdmin/>}></Route  >
                  <Route path="/employer" element={<UserProfileEmployer/>}></Route>
                  <Route path="/user" element={<UserProfile/>}></Route> 
                  <Route path="/test1" element={<Test1/>}></Route>
                  <Route path="/test2" element={<Test2/>}></Route>
                  <Route path="/test3" element={<Test3/>}></Route>
                  <Route path="/questiontest1" element={<QuestionsTest1/>}></Route>
                  <Route path="/questiontest2" element={<QuestionsTest2/>}></Route>
                  <Route path="/questiontest3" element={<QuestionsTest3/>}></Route>


              </Routes>
           </BrowserRouter>    
    </>
  );
}

export default App;
