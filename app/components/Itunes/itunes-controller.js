import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ""
  for (let i = 0; i < 50; i++) {
    let song = results[i];
    template += `
        <div class="card py-3 my-3 px-2">
          <img src="${song.albumArt}" class="card-img-top" id="art">
          <div class="card-body">
          <audio controls src="${song.preview}"></audio>
          <div class="card-title">
          <h4>${song.title}</h4>
          <h5> ${song.artist}</h5>
          <h5>${song.collection}</h5>
          <h5>${song.price}</h5>
        </div>
                </div>

                        </div>

      `
  }
  document.getElementById('songs').innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController