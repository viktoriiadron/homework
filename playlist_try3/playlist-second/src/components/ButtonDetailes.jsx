import { useHistory } from 'react-router-dom';

function ButtonDetailes( {song}) {
    const history = useHistory();
    return (
        <button className='button' onClick={() => history.push(`/playlist/${song.id}`)}>
            Detailes
        </button> );
}

export default ButtonDetailes;