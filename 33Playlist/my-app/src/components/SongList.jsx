import SongItem from "./SongItem";
import songs from '../sourse';
import { useState } from 'react';

function SongList() {
    
    const [todos, SetTodos] = useState(songs);
    
    return (
        <div>
            {todos.map(element => <SongItem song={element} key={element.id} />)}
        </div>
    )
}

export default SongList;
