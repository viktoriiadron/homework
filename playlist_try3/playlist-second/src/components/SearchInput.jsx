import { useEffect, useMemo, useState } from "react";

function SearchInput({ songs, songState }) {

    const [value, setValue] = useState('');

    useEffect(() => {
        // if (value) {
        //     songState(songs.filter(song =>
        //         song.name.toLowerCase()
        //             .includes(value.toLowerCase())))
        // } else {
            songState(filteredSongs)
        //}
    }, [value]);

    const filteredSongs = useMemo(() => {
        return songs.filter(song =>
                song.name.toLowerCase()
                    .includes(value.toLowerCase())) 
    }, [value, songs])

    // const searchParams = (event) => {
    //     setValue(event.target.value);
    // }
        

    return (
        <>
            <input
                placeholder='Search'
                type='text'
                className="input-box"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                
            />
        </>
     );
}

export default SearchInput;