import SongItem from "./SongItem";
import songs from '../sourse';
import { useState } from 'react';
import CustomInput from './CustomInput'

function SongList() {
    
    const [song, SetSong] = useState(songs);

    
    return (
        <div>
            {song.map(element => <SongItem song={element} key={element.id} />)}
        </div>
    )
}

export default SongList;
