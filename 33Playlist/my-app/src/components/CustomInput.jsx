import { useState } from "react";
//import ButtonAdd from "./ButtonAdd";
import songs from "../sourse";



function CustomInput() {

    const [todos, setTodos] = useState(songs);

    const getId = () => {
        if (!todos.length) {
            return 1;
         } return todos[todos.length - 1].id + 1;
    }

    const [todo, setTodo] = useState({
        id: getId(),
        name: '',
        isLiked: false,
        author: '',
        releaseDate: '',
        albumName: ''
    });

    const addSong = (event) => {
        event.preventDefault();
        console.log(todo);
        
        setTodos([...todos, {
            ...todo,
        }])

        console.log(todos);
    }

    return (
        <form>
            <input
                class="input-box" type="text"
                value={todo.name} name='name' placeholder="Song name"
                onChange={(event) => setTodo({ ...todo, name: event.target.value })}
            />
            <input
                class="input-box" type="text"
                value={todo.author} name='author' placeholder="Song author"
                onChange={(event) => setTodo({ ...todo, author: event.target.value })}
            />
            <input
                class="input-box" type="text"
                value={todo.releaseDate} name='releaseDate' placeholder="Song releaseDate"
                onChange={(event) => setTodo({ ...todo, releaseDate: event.target.value })}
            />
            <input class="input-box" type="text"
                value={todo.albumName} name='albumName' placeholder="Song albumName"
                onChange={(event) => setTodo({ ...todo, albumName: event.target.value })}
            />

            <input class="button add" type="submit" value="Add new song" onClick={addSong}/>
            {/* <ButtonAdd/> */}
        </form>
    )
}

export default CustomInput