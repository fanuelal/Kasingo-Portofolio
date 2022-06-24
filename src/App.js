import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import LoginBox from './components/loginContainer';
import LoginHeader from './components/header';
import Home from './components/Home';
import PlayingZone from './components/PlayingZone';
import Payment from './components/Payment';
import Nav from './components/nav';
import AccountProfile from './components/accountProfile';

function App() {
  return (
    // <div className="body">
    //   {/* <LoginHeader />
    //   <LoginBox /> */}

    // </div>
    //<PlayingZone />
    //<Payment />
 
      <Home />


  );
}

export default App;
