import like from '../img/like.svg';

function ButtonLike({ song, likeFn }) {

    return (
        <>
            <button className='button like' onClick={() => likeFn(song)}>
                {song.isLiked ? 'Liked' : 'Like'}
                
            </button>
            {song.isLiked ? <img src={like} className='like-icon' alt="logo" /> : null}
        </>
    )
}

export default ButtonLike;