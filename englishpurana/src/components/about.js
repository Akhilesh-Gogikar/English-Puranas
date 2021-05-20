
import Button from "react-bootstrap/Button";
// import Text from 'react-text';
import logo from '../logo.png';
import Main from "./main.js"
import { useHistory } from "react-router-dom";
import '../App.css';
import Navbar from "react-bootstrap/Navbar";

function About() {
  const history = useHistory();

  const goLogin = () => {
    history.push('/');
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
    <header className="App-header" style={{padding: "5px 50px 10px 50px"}}>
    <br/>
      <p className="mb-0 h1" style={{textDecoration:"underline", color:"yellow"}}>Simple Puranas</p>
      <br/>
      <p style={{textDecoration:"underline", color:"yellow"}}>Goal of the Simple Puranas</p>
      <p>The ancient puranas contain stories written as verses in the times of sages</p>
      <p>These stories were passed down from generations through scriptures and plays</p>
      <p>We are slowly losing touch of these ancient stories which have much to teach us in current times as they were available in touch to translate sanskrit and hard to read books, scriptures or pdfs.</p>
      <p>Simple puranas was designed as a tool to help interested readers of all age groups to easily access the content of these documents.</p>
      <p>We aim to utilize modern development tools to provide this content in an manner which is easily assimilable and fun to peruse</p>
      <br/>
      <p style={{textDecoration:"underline", color:"yellow"}}>Source of simple puranas</p>
      <p>The source of the content for simple puranas comes from a pdf which was one of the earliest attempts to digitise the stories in the puranas</p>
      <p>The dharmic scriptures team translated and compiled the content of these stories in 2002</p>
      <p>Puranas are so old that an author is not known, so are the vedas and the upanishads</p>
      <p>Hindu scriptures have been passed down through generations without ownership of content</p>
      <p>Simple puranas is an effort to carry forward this legacy so that future generations can benefit from these stories</p>
      <br/>
      <p style={{textDecoration:"underline", color:"yellow"}}>Karma point system</p>
      <p>The Karma system is hindu tradition which say good and bad deeds are tracked by the creator of the universe and rewarded as such</p>
      <p>We created a simple point system to keep the readers motivate, the score of reading a page is the sum of the points scored for all the pages read before it in the current session</p>
      <p>The puranas are dense, and we encourage the user to read as many puranas, chapters and sections, as they can in a single session</p>
      <p>Quizzes will be made available and online competitions will be held to boost the karma points of the dharmic readers</p>
      <p>It is very easy to score good karma and very hard to incur bad karma as long as the teachings of the puranas are kep close to heart</p>
      <br/>
      <p style={{textDecoration:"underline", color:"yellow"}}>How to use</p>
      <p>Login with your Gmail id and we will create your profile</p>
      <p>Check the index for the purana you want to read</p>
      <p>Start from the top and read to the bottom of each page</p>
      <p>Meditate on the beauty of any image you find extremely pleasing, this will help you build a love for god and calm your heart, mind and soul.</p>
      <p>Reflect on the meaning of the section and try to understand any shloka or complicated word</p>
      <p>Click next to go the next section, keep conscious track of which section you are at, so that you may revisit it later</p>
      <p>Share any section you particularly like on social media through the various buttons made available</p>
      <br/>
      <p style={{textDecoration:"underline", color:"yellow"}}>Jai Shree Krishna, Jai Shree Ram, Om Namah Shivay!</p>
      <input type="button" className="btn btn-primary" value="Home" onClick={goLogin}></input>
    </header>
    </div>
  );
}


export default About;
