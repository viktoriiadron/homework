import SongItem from "./SongItem";

function SongList({songs, songState, deleteSong, likeFn}) {


    return ( <ul className="songs">
        {songs.map(item => <SongItem song={item} key={item.id} songState = {songState} deleteSong={deleteSong} likeFn={likeFn} />)}
             </ul> );
}

export default SongList;