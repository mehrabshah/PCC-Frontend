import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home/Home';
import Professions from './components/Home/Professions';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';
import UserProfile from './components/UserProfile/UserProfile';

import UserProfileAdmin from './components/Admin/UserProfileAdmin';
import Test1 from './components/Admin/Test1/Test1';
import Test2 from './components/Admin/Test2/Test2';
import Test3 from './components/Admin/Test3/Test3';
import QuestionsTest1 from './components/UserProfile/QuestionsTest1';
function App() {
  return (
    <>  
            <Test1/>  
          <QuestionsTest1/>


         {/* <UserProfileAdmin></UserProfileAdmin>   */}

     {/* <Options/> */}
     {/* <UserProfile/>  */}
      {/* <Signin></Signin>    */}
       {/* <Signup></Signup>   */}
        {/* <Navbar/>
     <Home></Home>
     <Professions></Professions>
     <Footer></Footer>     */}
    </>
  );
}

export default App;
