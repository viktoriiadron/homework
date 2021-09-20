import './App.css';
import Input from './components/Input';
import SongList from './components/SongList';
import Count from './components/Count';
import songs from './components/songs_source';
import { useState } from "react";

function App() {

  let [song_items, setSong_items] = useState(songs);

  const addSong = (song) => {
    setSong_items([...song_items, song]);
  }

      const deleteSong = (id) => {
    setSong_items(song_items.filter((songItem) => songItem.id !== id))
      }
  
  const likeFn = (id) => {

    setSong_items(song_items.map((songItem) => {
      if (songItem.id === id) {
        if (songItem.isLiked) {
          songItem.isLiked = false
        } else songItem.isLiked = true
      }
      return songItem;
    }))
  } 

  return (
    <div className="App">
      <h2>Playlist</h2>
      <Input songs={song_items} addSong={addSong} />
      <div className="songs-wrapper">
        <SongList songs={song_items} songState={setSong_items} deleteSong={deleteSong} likeFn={ likeFn}/>
      </div>
      <Count songs={ song_items}/>
      </div>
  );
}

export default App;
