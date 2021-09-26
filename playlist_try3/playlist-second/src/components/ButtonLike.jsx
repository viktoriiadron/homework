import { SongContext } from '../pages/Playlist';
import like from '../img/like.svg';
import { useContext } from 'react';

function ButtonLike({ song }) {
    const { likeFn } = useContext(SongContext);
    
    return (
        <>
            <button className='button like' onClick={() => likeFn(song.id)}>
                {song.isLiked ? 'Liked' : 'Like'}
                
            </button>
            {song.isLiked ? <img src={like} className='like-icon' alt="logo" /> : null}
        </>
    )
}

export default ButtonLike;