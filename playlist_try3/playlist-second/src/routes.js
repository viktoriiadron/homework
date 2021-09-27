import About from "./pages/About";
import Playlist from "./pages/Playlist";
import SongDetailes from "./pages/SongDetailes";
import Login from "./pages/Login";

export const privateRroutes = [
    { path: '/playlist', component: Playlist, exact: true },
    { path: '/about', component: About, exact: true },
    { path: '/playlist/:id', component: SongDetailes, exact: true },
];

export const publicRotes = [
    { path: '/about', component: About, exact: true },
    { path: '/login', component: Login, exact: true },
]