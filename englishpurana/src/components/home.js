
import Button from "react-bootstrap/Button";
// import Text from 'react-text';
import logo from '../logo.png';
import Main from "./main.js"
import { useHistory } from "react-router-dom";
import '../App.css';

function Home() {
  const history = useHistory();

  const goLogin = () => {
    history.push('login');
  }
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
      <p style={{textDecoration:"underline"}}>English Puranas</p>
      <p>Stories from ancient india.</p>
      <p>Indian puranas are stories explaining the fundamentals and origins of Indian hindu religion.</p>
      <p>Read and share stories about Indian gods, thier significance,</p>
      <p> ways to worship them, and thier endeavours to enhance humanity.</p>
      <p>Understand the meaning of the purans and apply to your lifes.</p>
      <input type="button" className="btn btn-primary filldiv" value="Login" onClick={goLogin}></input>
    </header>
    </div>
  );
}


export default Home;
