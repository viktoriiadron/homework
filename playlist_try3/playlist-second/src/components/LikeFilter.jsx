import { useState } from "react"

function LikeFilter({ likedSongFilter, allSongsFilter }) {
    const [isChecked, setIsChecked] = useState(false);

    const changeChekcboxState = () => {
        setIsChecked(isChecked => !isChecked);
        if (!isChecked) {
            return likedSongFilter()
        } else { allSongsFilter() };
        
    }

    return (<>
        <input
            type='checkbox'
            id='liked'
            
            checked={isChecked}
            onChange={changeChekcboxState}
        />
        <label htmlFor='liked' >Liked</label>
    </> );
}

export default LikeFilter;