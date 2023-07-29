import {createBrowserRouter} from "react-router-dom";
import MovieList from "./pages/MovieList";
import NewsList from "./pages/NewsList";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MovieList />,

    },
    {
        path: '/news',
        element: <NewsList />,

    },
    {
        path: '/login',
        element: <LogIn />,

    },
    {
        path: '/signup',
        element: <SignUp />,

    },
])

export default router;