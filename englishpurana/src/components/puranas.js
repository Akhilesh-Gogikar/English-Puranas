
import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { setPage, updateSession } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { getPage } from "../redux/selectors";
import GoogleAd from './googleAds';

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
            <img {...props} />
        );
    }
    return null;
};

function Puranas({propOne, setPage}) {

  const history = useHistory();

  useEffect(() => {
    if (propOne.userId === ""){
      history.push('login');
    }
  }, [])

  const [url, setUrl] = useState("https://raw.githubusercontent.com/Akhilesh-Gogikar/English-Puranas/master/puranas_jsons/"+propOne.currentPage+".json")
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({'text':[]});
  const [imgurl, setImgurl] = useState("https://simplepuranas.sgp1.digitaloceanspaces.com/"+propOne.currentPage+".png")

  const goIndex = () => {
    history.push('index');
  }

  const goNext = () => {
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
          console.log(result)
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
          console.log(result)
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

  console.log(items['text'])

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
      <GoogleAd slot="4653616521" timeout={1000} classNames="page-top" />
      <header className="App-header">
      <p className='red-text-shadow' style={{textDecoration:"underline"}}>{items.index}</p>
      <div className='row'>
          <div className='column left'>

            <input type="button" className="btn btn-primary filldiv" style={{float:"left"}} value="Prev" onClick={goPrev}></input>
          </div>

          <div className='middle'>

            <p className='red-text-shadow' style={{textDecoration:"underline"}}>{items.title}</p>
            <p/>
            <AsyncImage src={imgurl} />
            <p/>
            <div>{ items.text.map(notification => <p className='red-text-shadow'>{ notification }</p>) }</div>

          </div>

          <div className='column right'>

          <input type="button" className="btn btn-primary filldiv" value="Next" onClick={goNext}></input>

          </div>

      </div>
      <div className='row'>
        <div className='column left'>

          <input type="button" className="btn btn-primary" value="Prev" onClick={goPrev}></input>
        </div>
        <div className='column middle'>
        <input type="button" className="btn btn-danger" value="Index" style={{float:"center"}} onClick={goIndex}></input>
        </div>
        <div className='column right'>

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
  console.log(state.stateManager)
  return { propOne: state.stateManager };
}

export default connect(mapStateToProps, {setPage})(Puranas);
