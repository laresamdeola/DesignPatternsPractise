const musicianProperties ={
  artistName: "",
  genre: ""
};

const musicianMethods = {
  artistInfo: (object) => {
    return object.artistName + object.genre;
  }
};

const marley = {
  musicianProperties.artistName: "Marley",
  musicianProperties.genre: "Reggae",
  
}

console.log(musicianMethods.artistInfo(marley));