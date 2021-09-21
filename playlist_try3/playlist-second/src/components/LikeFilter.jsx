import { useState } from "react"

function LikeFilter({ songs, songState }) {

    const [x, setX] = useState(false)

    const filterLiked = () => {
        setX(!x)

        if (x) {
            songState(
                songs.filter((song) => song.isLiked).map(song => song))
        }
         else {
            songState(songs)
        }  
        
    }

    return (<>
        <input
            type='checkbox'
            id='liked'
            onChange={() => filterLiked()}
            checked={x}
        />
        <label htmlFor='liked' >Liked</label>
    </>    );
}

export default LikeFilter;