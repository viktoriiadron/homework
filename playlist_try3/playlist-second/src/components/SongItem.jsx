import ButtonDel from "./ButtonDel";
import ButtonLike from "./ButtonLike";
import  ButtonDetailes from './ButtonDetailes'


function SongItem({song, songState}) {

    return (
        <li>
            {song.id} {song.name}, ({song.author}, {song.releaseDate}, alb: {song.albumName})
            <ButtonDel song={song} songState={songState }/>
            <ButtonLike song={song} songState={songState} />
            <ButtonDetailes song={ song }/>
        </li>
    )
}

export default SongItem;