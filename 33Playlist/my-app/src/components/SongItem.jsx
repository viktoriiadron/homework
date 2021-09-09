import CreateLike from './ButtonLike';
import CleateDelBut from './ButtonDel';

function SongItem({ song }) {

    return (
      <li>
        {song.id} {song.name}, author: {song.author},
        year: {song.releaseDate}, album: {song.albumName}
        <CreateLike/>
        <CleateDelBut/>
      </li>
    )
}
  
export default SongItem;