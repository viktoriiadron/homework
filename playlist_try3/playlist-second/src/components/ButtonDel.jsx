function ButtonDel({ song, deleteSong }) {

    return (<button className= 'button delete' onClick={() => deleteSong(song.id)}>
        Delete
    </button> );
}

export default ButtonDel;