import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //run code based on a given condition 
  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token  = hash.access_token;
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token) // giving access token to spotify web api
      spotify.getMe().then(user =>{
        console.log('👦🏼',user)
      })
    }
    
  }, []);
  return (
    //BEM convention
    <div className="app">   
    {
      token ? (<Player/>) :( <Login/>)
    }
    <Login/>
    </div>
  );
}

export default App;







//npm install spotify-web-api-js