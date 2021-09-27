import { useParams } from 'react-router-dom'

function SongDetailes() {
    const params = useParams()

    return (<h1>
        Hello from song detailes page for song No. {params.id}
    </h1> );
}

export default SongDetailes;