import { useState } from "react";

function Input({songs, addSong}) {

    const [newSong, setNewSong] = useState({
        name: '',
        isLiked: false,
        author: '',
        releaseDate: '',
        albumName: ''
    });

    const getId = () => {
        if (!songs.length) {
            return 1;
        } return songs.length + 1;
    }

    const addNewSong = (event) => {
        event.preventDefault();
        const newSongItm = {
            ...newSong,
            id: getId(),
        }
        addSong(newSongItm);
    }

    return (<form>
        <input className="input-box" type="text"
            value={newSong.name} name='name' placeholder='Song name'
            onChange={(event) => setNewSong({ ...newSong, name: event.target.value })}
        />
        <input className="input-box" type="text"
            value={newSong.author} name='author' placeholder='Song author'
            onChange={(event) => setNewSong({ ...newSong, author: event.target.value })}
        />
        <input className="input-box" type="date"
            value={newSong.releaseDate} name='releaseDate' placeholder='Date'
            onChange={(event) => setNewSong({ ...newSong, releaseDate: event.target.value })}
        />
        <input className="input-box" type="text"
            value={newSong.albumName} name='albumName' placeholder='Song album'
            onChange={(event) => setNewSong({ ...newSong, albumName: event.target.value })}   
        />
        <input className='button add' type='submit' value='Add song'
            onClick={addNewSong} 
        />

    </form> );
}

export default Input;