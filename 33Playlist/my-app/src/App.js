import React from 'react';
import './App.css';
import songs from './sourse.js';

function App() {

  function count(array) {
    return array.length
  }

  function createLike() {
    return (<button class='button like'>Like</button> )
  }

  function cleateDelBut() {
    return (
      <button class='button delete'>Delete</button>
    )
  }

  function addSong(element) {
    return (
      <li>
        {element.id} {element.name}, author: {element.author},
        year: {element.releaseDate}, album: {element.albumName}
        {cleateDelBut()}
        {createLike()}
      </li>
    )
  }

  return (
    <div className="App">
     <h2>Playlist</h2>
    <input class="input-box" type="text" placeholder="Song..." />
    <input class="button add" type="button" value="Add new song" />
    <div class="songs-wrapper">
        <ul class="songs">{songs.forEach(el => addSong(el))}</ul>
    </div>
      <p class="count-title">Count of songs: <span class="count"> {count(songs)} </span></p>
    </div>
  );
}

export default App;
