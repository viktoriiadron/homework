import './App.css';
import Input from './components/Input';
import SongList from './components/SongList';
import Count from './components/Count';
import songs from './components/songs_source';
import React, { useMemo, useState } from "react";
import SearchInput from './components/SearchInput';
import LikeFilter from './components/LikeFilter';
import SongYearSort from './components/SongYearSort';

export const SongContext = React.createContext();

function App() {

  let [song_items, setSong_items] = useState(songs);

  const likedSongs = useMemo(() =>  song_items.filter(song => song.isLiked) , [song_items]);
  const allSongs = useMemo(() =>  song_items,  [] )

  const likedSongFilter = () => {
    setSong_items(likedSongs);
  };

  const allSongsFilter = () => {
    setSong_items(allSongs);
  };

  const sortSongs = (event) => {
    if (!!event) {
     setSong_items(song_items.sort((a, b) => a.releaseDate - b.releaseDate));
    } else {
      setSong_items(allSongs);
    }
  };

  const addSong = (song) => {
    setSong_items([...song_items, song]);
  }

  const deleteSong = (id) => {
    setSong_items(song_items.filter((songItem) => songItem.id !== id))
  }
  
  const likeFn = (id) => {

    setSong_items(song_items.map(
      (songItem) => {
        return songItem.id === id ?
          { ...songItem, isLiked: !songItem.isLiked }
          : songItem;
      }))
  }

  return (
    <div className="App">
      <h2>Playlist</h2>
      <LikeFilter likedSongFilter={likedSongFilter} allSongsFilter={allSongsFilter} />
      <SongYearSort sortSongs={sortSongs} />
      <SearchInput songs={song_items} songState={setSong_items}/>
      <Input songs={song_items} addSong={addSong} />
      <div className="songs-wrapper">
        <SongContext.Provider value = {{ deleteSong, likeFn}}>
        <SongList songs={song_items} songState={setSong_items}/>
        </SongContext.Provider>
      </div>
      <Count songs={ song_items}/>
      </div>
  );
}

export default App;
