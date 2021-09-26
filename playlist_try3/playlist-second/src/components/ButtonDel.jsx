import { SongContext } from "../pages/Playlist";
import { useContext } from "react";

function ButtonDel({ song }) {
    const { deleteSong } = useContext(SongContext);

    return (<button className= 'button delete' onClick={() => deleteSong(song.id)}>
        Delete
    </button> );
}

export default ButtonDel;