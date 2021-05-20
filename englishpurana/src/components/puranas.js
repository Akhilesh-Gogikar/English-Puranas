
import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { setPage, updateSession } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { getPage } from "../redux/selectors";
import GoogleAd from './googleAds';
import Navbar from "react-bootstrap/Navbar";
import logo from '../logo.png';
import database from "./firebaseDB"



import {
  FacebookShareCount
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} className="img-fluid"/>
        );
    }
    return null;
};

function Puranas({propOne, setPage}) {

  const history = useHistory();

    const [userdata, setUserData] = useState({});
    const [karma, setKarma] = useState(0);

  // console.log(userdata)

  useEffect(() => {
    if (propOne.userId === ""){
      history.push('login');
    }
  }, [])

  useEffect(() => {
  if (propOne.userId != ""){
    // console.log("Creating a new user in rtdb")

      const userRef = database.ref('users')

      userRef.orderByChild("uid").equalTo(propOne.userId.uid).once("value",snapshot => {
      if (snapshot.exists()){
        const userData = snapshot.val();
        // console.log("exists!");
        setUserData(userData);
        for (let id in userData){
          // console.log(userData[id]);

          var new_karma = userData[id].karma + Math.ceil(propOne.session.length*(propOne.session.length+1)*0.5);
          // console.log(new_karma)
          setKarma(new_karma);
        }

      } else {

        const data = {
          displayName: propOne.userId.displayName,
          email: propOne.userId.email,
          photoURL: propOne.userId.photoURL,
          uid: propOne.userId.uid,
          phoneNumber: propOne.userId.phoneNumber,
          karma:0,
          session:[],
          ts:Date.now()
        }
        userRef.push(data)
      }
  });

  }
}, [userdata, propOne])

  const [url, setUrl] = useState("https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranas_jsons/"+propOne.currentPage+".json")
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({'text':[]});
  const [imgurl, setImgurl] = useState("https://simplepuranas.sgp1.digitaloceanspaces.com/"+propOne.currentPage+".png")

  const goIndex = () => {
    history.push('index');
    const userRef = database.ref('users');
    userRef.orderByChild("uid").equalTo(propOne.userId.uid).once("value",snapshot => {
    if (snapshot.exists()){
      for (let id in userdata){
         userRef.child(id).update({karma: karma, session: propOne.session, ts:Date.now()});
       }
     }
   });
  }

  const goNext = () => {
    const userRef = database.ref('users');
    userRef.orderByChild("uid").equalTo(propOne.userId.uid).once("value",snapshot => {
    if (snapshot.exists()){
      for (let id in userdata){
         userRef.child(id).update({karma: karma, session: propOne.session, ts:Date.now()});
       }
     }
   });
    if(items["next"]){
    setPage(items["next"]);
    var new_url = "https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranas_jsons/"+items["next"]+".json"
    var new_imgurl = "https://simplepuranas.sgp1.digitaloceanspaces.com/"+items["next"]+".png"
  } else {
    history.push('index');
  }
    setUrl(new_url)
    setImgurl(new_imgurl)

    fetch(url)
      .then( res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  var new_url;
  var new_imgurl;

  // stop audio sound
  const goPrev = () => {
    const userRef = database.ref('users');
    userRef.orderByChild("uid").equalTo(propOne.userId.uid).once("value",snapshot => {
    if (snapshot.exists()){
      for (let id in userdata){
         userRef.child(id).update({karma: karma, session: propOne.session, ts:Date.now()});
       }
     }
   });
    if(items["prev"]){
      setPage(items["next"]);
    new_url = "https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranas_jsons/"+items["prev"]+".json"
    new_imgurl = "https://simplepuranas.sgp1.digitaloceanspaces.com/"+items["prev"]+".png"
  } else {
    history.push('index');
    }
    setUrl(new_url)
    setImgurl(new_imgurl)
    fetch(url)
      .then( res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(url)
      .then( res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [url])

  // console.log(items['text'])

  if (error) {
    return <div className='App' >
    <header className="AppHeader">Error: {error.message}
    </header>
    </div>;
  } else if (!isLoaded) {
    return <div><header className="AppHeader">Loading...</header></div>;
  } else {
    return (
      <div className='App' >
      <Navbar bg="warning" variant="light">
      <img
        alt=""
        src={logo}
        width="70"
        height="70"
        className="d-inline-block align-top"
      />{' '}
      <Navbar.Brand href="/" >

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
    <Navbar.Text type="button" className="btn btn-success" style={{color:"white"}}>
    Karma Points<br/><a href="login" className="mb-0 h1" style={{color:"white"}}>{karma}</a>
    </Navbar.Text>
    <Navbar.Text>
&nbsp;&nbsp;
    </Navbar.Text>
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
      <GoogleAd slot="4653616521" timeout={1000} classNames="page-top" />
      <header className="App-header">
      <p className='red-text-shadow' style={{textDecoration:"underline"}}>{items.index}</p>
      <p className='red-text-shadow' className="mb-0 h1" style={{textDecoration:"underline", color:"yellow"}}>{items.title}</p>
      <div className='row'>

          <div>


            <p/>
            <AsyncImage src={imgurl} />
            <p/>
            <div>
            <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            </div>
            <div>{ items.text.map(notification => <p className='red-text-shadow' style={{padding: "5px 50px 10px 50px"}}>{ notification }</p>) }</div>

          </div>

      </div>
      <div>
      </div>
      <div class="d-flex" >
        <div style={{flex:0.5}}>

          <input type="button" className="btn btn-primary" value="Prev" style={{float:"left"}} onClick={goPrev}></input>
        </div>

        <div style={{flex:2}}>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>

        </div>

        <div style={{flex:0.5}}>
        <TwitterShareButton url="https://www.simplepuranas.com/" title={items.title} via="https://www.simplepuranas.com/" hashtag="#Dharmic #Hindu #Puranas">
          <TwitterIcon logoFillColor="white" size={45} round={true}/>
        </TwitterShareButton>
        </div>

        <div style={{flex:2}}>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>

        </div>

        <div style={{flex:0.5}}>
        <WhatsappShareButton url="https://www.simplepuranas.com/" quote={items.title}>
          <WhatsappIcon logoFillColor="white" size={45} round={true}/>
        </WhatsappShareButton>
        </div>

        <div style={{flex:2}}>
        <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        </div>

        <div style={{flex:0.5}}>
        <input type="button" className="btn btn-danger" value="Index" onClick={goIndex}></input>
        </div>

        <div style={{flex:2}}>
        <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        </div>

        <div style={{flex:0.5}}>
        <FacebookShareButton url="https://www.simplepuranas.com/" quote={items.title} hashtag="#Dharmic #Hindu #Puranas">
          <FacebookIcon logoFillColor="white" size={45} round={true}/>
        </FacebookShareButton>
        </div>

        <div style={{flex:2}}>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>

        </div>

        <div style={{flex:0.5}}>
        <LinkedinShareButton url="https://www.simplepuranas.com/" title="Simple Puranas - Hindu Ancient Stories" summary={items.title} source="https://www.simplepuranas.com/">
          <LinkedinIcon logoFillColor="white" size={45} round={true}/>
        </LinkedinShareButton>
        </div>

        <div style={{flex:2}}>
        <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        </div>

        <div style={{flex:0.5}}>

        <input type="button" className="btn btn-primary " style={{float:"right"}} value="Next" onClick={goNext}></input>

        </div>
      </div>
      </header>
      <GoogleAd slot="9722659117" timeout={1000} classNames="page-bottom" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.stateManager)
  return { propOne: state.stateManager };
}

export default connect(mapStateToProps, {setPage})(Puranas);
