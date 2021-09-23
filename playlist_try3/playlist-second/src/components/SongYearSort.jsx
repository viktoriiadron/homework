function SongYearSort({sortSongs}) {

    return (<select onChange ={(event) => sortSongs(event.target.value)}>
        <option></option>
         <option>sort year</option>
    </select> );
}

export default SongYearSort;