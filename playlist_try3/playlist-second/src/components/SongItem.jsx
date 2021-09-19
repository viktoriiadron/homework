import ButtonDel from "./ButtonDel";
import ButtonLike from "./ButtonLike";


function SongItem({song, songState, deleteSong, likeFn}) {

    return (
        <li>
            {song.id} {song.name}, ({song.author}, {song.releaseDate}, alb: {song.albumName})
            <ButtonDel song={song} songState={songState } deleteSong={ deleteSong}/>
            <ButtonLike song={song} songState={songState} likeFn={ likeFn}/>
        </li>
    )
}

export default SongItem;