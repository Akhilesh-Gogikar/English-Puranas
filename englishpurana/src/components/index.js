// Create an index page which has a list of puranas
// when clicked on a purana we are led to a page which shows all the list chapters and sections
// and a button to start reading from the first page
// our choice should be saved in the app state in redux
// The app state will be used to show the appropriate contents
import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { setPage } from "../redux/actions";
import { useHistory } from "react-router-dom";
import GoogleAd from './googleAds';

import logo from '../logo.png';

function PuranaIndex({propOne, setPage}){

  useEffect(() => {
    if (propOne === ""){
      history.push('login');
    }
  }, [])

  console.log(propOne)

  const history = useHistory();

  const [url, setUrl] = useState("https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranasIndex.json")
  const [purl, setPurl] = useState("https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranas.json")
  const [puranas, setPuranas] = useState({'puranas':[]});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({'text':[]});
  const [elements, setElements] = useState([]);
  const [purana, setPurana] = useState([]);
  const [title, setTitle] = useState('Puranas');

  const goNext = (props) => {
        let path = `puranas`;
    if (props && items.hasOwnProperty(props.title)){
      setElements(items[props.title]);

    } else {
      // console.log("Check for chapters passed")
      if(props){
        // console.log(propOne)
        setPage(props.index)
        history.push(path);
      } else {
        setPage('1');
    history.push(path);
      }
      // Set the state in redux to the chapter in puran and redirect to /puranas
    }
  }

  useEffect(() => {
    fetch(purl)
      .then( res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setPuranas(result);
          setElements(puranas.puranas);
          // console.log(elements)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  }, [purl])

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
  // console.log('Puranas')
  // console.log(puranas.puranas)

  const goBack = () => {
      setElements(puranas.puranas);
  }

  //
  // console.log('Index')
  // console.log(items)

  if (error) {
    return <div className='App' >
    <header className="AppHeader">Error: {error.message}
    </header>
    </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

      <div className='App' >
            <GoogleAd slot="4653616521" timeout={1000} classNames="page-top" />
      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />

      <p className='red-text-shadow' style={{textDecoration:"underline"}}>Puranas</p>

      <input type="button" className="btn btn-primary" value="Start Reading" onClick={() => goNext()}></input>

      <p/>

      <input type="button" className="btn btn-danger" value="Index" onClick={() => goBack()}></input>

      <br/>

      <div>{ elements.map(notification => <div><input type="button" className="btn btn-primary" value={ notification.title } onClick={() => goNext(notification)}></input><br/></div>) }</div>

      <br/>



      </header>
            <GoogleAd slot="9722659117" timeout={1000} classNames="page-bottom" />
      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log(state.stateManager)
  return { propOne: state.stateManager.userId};
}

export default connect(mapStateToProps, {setPage})(PuranaIndex);
