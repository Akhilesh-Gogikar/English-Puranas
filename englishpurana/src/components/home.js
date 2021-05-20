
import Button from "react-bootstrap/Button";
// import Text from 'react-text';
import logo from '../logo.png';
import Main from "./main.js"
import { useHistory } from "react-router-dom";
import '../App.css';
import Navbar from "react-bootstrap/Navbar";

function Home() {
  const history = useHistory();

  const goLogin = () => {
    history.push('login');
  }
  return (
    <div className="App">
    <Navbar bg="warning" variant="light">
    <Navbar.Brand href="/" >
    <img
      alt=""
      src={logo}
      width="35"
      height="35"
      className="d-inline-block align-top"
    />{' '}
      Simple Puranas
    </Navbar.Brand>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Navbar.Brand type="button" className="btn btn-link" style={{color:"white"}}>
  <a href="about" style={{color:"Brown"}}>About</a>
  </Navbar.Brand>
  <Navbar.Text>
&nbsp;&nbsp;
  </Navbar.Text>
    <Navbar.Text>
    <Button variant="outline-light" href="/login">Signin</Button>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
      <p className="mb-0 h1" style={{textDecoration:"underline", color:"yellow"}}>Simple Puranas</p>
      <br/>
      <p>Stories from ancient india.</p>
      <p>Indian puranas are stories explaining the fundamentals and origins of Indian hindu religion.</p>
      <p>Read and share stories about Indian gods, thier significance,</p>
      <p>ways to worship them, and thier endeavours to enhance humanity.</p>
      <p>Assimilate the teachings of the puranas to enhance your lives.</p>
      <input type="button" className="btn btn-primary" value="Login" onClick={goLogin}></input>
    </header>
    </div>
  );
}


export default Home;
