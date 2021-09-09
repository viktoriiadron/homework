import './App.css';
import Count from './components/Count';
import SongList from './components/SongList'

function App() {
  return (
     <div className="App">
     <h2>Playlist</h2>
    <input class="input-box" type="text" placeholder="Song..." />
    <input class="button add" type="button" value="Add new song" />
    <div class="songs-wrapper">
        <ul class="songs"><SongList/></ul>
    </div>
      <p class="count-title">Count of songs: <Count/> <span class="count"> </span></p>
    </div>
  );
}

export default App;
