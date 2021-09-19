import './App.css';
import Count from './components/Count';
import SongList from './components/SongList';
import CustomInput from './components/CustomInput';

function App() {
  return (
     <div className="App">
     <h2>Playlist</h2>
    <CustomInput/>
    <div class="songs-wrapper">
        <ul class="songs"><SongList/></ul>
    </div>
      <p class="count-title">Count of songs: <Count/> <span class="count"> </span></p>
    </div>
  );
}

export default App;
