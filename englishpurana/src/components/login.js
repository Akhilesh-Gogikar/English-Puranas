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
import { config } from "../config";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p style={{textDecoration:"underline"}}>Simple Puranas</p>
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
            console.log(isSignedIn);
            if(isSignedIn && userdata==null){
              console.log(user);
              setUserdata(user);
              console.log(userdata)
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
