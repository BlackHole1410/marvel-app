// src/routes.jsx

import { getCharacters, getCharacterById } from './api/characters-api';
import Layout from "./layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <CharactersPage />, loader: getCharacters },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                path: "/characters/:id", // Updated path to match the URL
                element: <CharacterDetailPage />,
                loader: async ({ params }) => {
                    const character = await getCharacterById(params.id);
                    if (!character) {
                        throw new Response("Character not found", { status: 404 });
                    }
                    return character;
                },
            },
        ],
    },
];

export default routes;