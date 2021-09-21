import ButtonDel from "./ButtonDel";
import ButtonLike from "./ButtonLike";


function SongItem({song, songState}) {

    return (
        <li>
            {song.id} {song.name}, ({song.author}, {song.releaseDate}, alb: {song.albumName})
            <ButtonDel song={song} songState={songState }/>
            <ButtonLike song={song} songState={songState}/>
        </li>
    )
}

export default SongItem;