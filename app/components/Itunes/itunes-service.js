import Song from "../../models/Song.js";

//DO NOT MODIFY
class ItunesService {

  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    return $.getJSON(url) //go to that url and get that 
      .then(res => res.results.map(s => new Song(s))) //data you got back, iterate on this array with a new song, given that song data
      .catch(err => console.log(err))
  }
}



export default ItunesService