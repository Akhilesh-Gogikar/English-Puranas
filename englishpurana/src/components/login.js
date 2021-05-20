import React, { useState } from "react";
import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { config } from "../config";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { updateUserId } from "../redux/actions";
import { useHistory } from "react-router-dom";
import "./login.css";
import '../App.css';
import logo from '../logo.png';

function Login({propOne, updateUserId}) {

  // Write a function to save login credentials into the redux
  const [userdata, setUserdata] = useState(null);

  const history = useHistory();

  const goHome = () => {
    history.push('index');
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
  <img
    alt=""
    src={propOne.userId.photoURL}
    width="50"
    height="50"
    class=""
    className="d-inline-block align-top"
    style={{borderRadius: "50%"}}
  />{' '}
  <br />
  <a href="login">{propOne.userId.displayName}</a>
  </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p className="mb-0 h1" style={{textDecoration:"underline", color:"yellow"}}>Simple Puranas</p>
    <br/>
      <FirebaseAuthProvider {...config} firebase={firebase}>
      <div>
      <div>
      <p>

      </p>
      </div>
        <button className="btn btn-warning"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            if(isSignedIn && userdata==null){
              setUserdata(user);
              updateUserId(user);
            }
            //

          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              // goHome();
              return <div><p>You are authenticated</p>
              <input type="button" className="btn btn-primary" value="Continue" onClick={goHome}></input>
          </div>;
            }}
          </IfFirebaseAuthed>
        </div>
      </div>
    </FirebaseAuthProvider>
    </header>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.stateManager)
  return { propOne: state.stateManager };
}

export default connect(mapStateToProps, {updateUserId})(Login)
