import SongItem from "./SongItem";

function SongList({songs, songState}) {


    return ( <ul className="songs">
        {songs.map(item => <SongItem song={item} key={item.id} songState = {songState} />)}
             </ul> );
}

export default SongList;