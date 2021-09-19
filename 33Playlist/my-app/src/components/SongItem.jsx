import CreateLike from './ButtonLike';
import ButtonDel from './ButtonDel';
import { useState } from 'react';
import songs from '../sourse';
import SongList from './SongList';

function SongItem({ song }) {

  const [music, setMusic] = useState(songs);

  const deleteSong = (id) => {
    setMusic(music.filter((song) => song.id !== id))
  }

    return (
      <li>
        {song.id} {song.name}, author: {song.author},
        year: {song.releaseDate}, album: {song.albumName}
        <CreateLike/>
        <ButtonDel deleteSong={deleteSong}/>
      </li>
    )
}
  
export default SongItem;