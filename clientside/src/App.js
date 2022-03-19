import {Route,Routes,Navigate} from 'react-router-dom';
import Head from './components/Head';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  const user = localStorage.getItem("token");    
  return (
    <Routes>
      {user && <Route path ="/" exact element={<Head/>}/>}
     <Route path="/signup" exact element = {<Signup/>}/>
     <Route path="/login" exact element = {<Login/>}/>
     <Route path="/" exact element = {<Navigate replace to ="/login"/>}/>
     </Routes>
  );
  
  }

export default App;