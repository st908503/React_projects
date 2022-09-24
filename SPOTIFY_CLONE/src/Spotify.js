 // https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


 export const authEndpoint = "https://accounts.spotify.com/authorize";
 const redirectUri = "http://localhost:3000/";
 const clientId = "eb50adcf3e334c8cb1d9e08cded44332"


 // steps to allow persissions on spotify what a user can do
 const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  //pulling the access token
  export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;


  ///now when we click on login button the homepage will show 3 points that are the scopes we passed using loginUrl