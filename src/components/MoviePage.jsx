import React from 'react';
import MovieCard from './MovieCard';
import FilterMovie from './FilterMovie';

const MoviePage = () => {

    const movies = [
        {
            id: 1,
            poster: "https://i.pinimg.com/webp80/1200x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.webp",
            title: "Interstellar",
            director: "Christopher Nolan",
            genre: "Sci-Fi / Adventure",
            description:
                "A team of astronauts travels through a wormhole in search of a new home for humanity.",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
            rating: 8.6,
            year: 2014,
            duration: "2h 49m",
        },
        {
            id: 2,
            poster: "https://i.pinimg.com/1200x/5c/e3/5a/5ce35a87a0a4e2682eb622fceaef503e.jpg",
            title: "Inception",
            director: "Christopher Nolan",
            genre: "Sci-Fi / Action",
            description:
                "A skilled thief enters dreams to steal secrets, but his biggest mission is planting an idea.",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
            rating: 8.8,
            year: 2010,
            duration: "2h 28m",
        },
        {
            id: 3,
            poster: "https://i.pinimg.com/1200x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg",
            title: "The Dark Knight",
            director: "Christopher Nolan",
            genre: "Action / Crime",
            description:
                "Batman faces the Joker, a criminal mastermind who pushes Gotham into chaos.",
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            rating: 9.0,
            year: 2008,
            duration: "2h 32m",
        },
        {
            id: 4,
            poster: "https://i.pinimg.com/webp80/1200x/42/00/da/4200dae9ac7b15a5c65375cbfaceaa69.webp",
            title: "Avengers: Endgame",
            director: "Anthony Russo, Joe Russo",
            genre: "Action / Superhero",
            description:
                "After Thanos' snap, the Avengers assemble for one final mission to restore balance.",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
            rating: 8.4,
            year: 2019,
            duration: "3h 2m",
        },
        {
            id: 5,
            poster: "https://i.pinimg.com/webp80/736x/a9/6a/00/a96a002732d97f46655bb7ed7a616db5.webp",
            title: "The Lord of the Rings: The Return of the King",
            director: "Peter Jackson",
            genre: "Fantasy / Adventure",
            description:
                "Frodo and Sam reach Mount Doom while Aragorn leads the final battle for Middle-earth.",
            cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
            rating: 8.9,
            year: 2003,
            duration: "3h 21m",
        },
        {
            id: 6,
            poster: "https://i.pinimg.com/736x/5d/23/e8/5d23e8cea42ba4a5513f6ab32f0b40c7.jpg",
            title: "Fight Club",
            director: "David Fincher",
            genre: "Drama / Thriller",
            description:
                "A frustrated man forms an underground fight club that grows into something dangerous.",
            cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
            rating: 8.8,
            year: 1999,
            duration: "2h 19m",
        },
        {
            id: 7,
            poster: "https://i.pinimg.com/webp80/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.webp",
            title: "The Matrix",
            director: "The Wachowskis",
            genre: "Sci-Fi / Action",
            description:
                "A hacker discovers the world is a simulation and joins a rebellion against machines.",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            rating: 8.7,
            year: 1999,
            duration: "2h 16m",
        },
        {
            id: 8,
            poster: "https://i.pinimg.com/webp80/1200x/bc/e3/c2/bce3c2cbd502d88d137200ee7d928f09.webp",
            title: "Parasite",
            director: "Bong Joon-ho",
            genre: "Thriller / Drama",
            description:
                "A poor family schemes to work for a wealthy household, leading to unexpected events.",
            cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
            rating: 8.5,
            year: 2019,
            duration: "2h 12m",
        },
        {
            id: 9,
            poster: "https://i.pinimg.com/webp80/1200x/f5/81/a9/f581a9b6c9ab5043d60d6f4c9be96223.webp",
            title: "Joker",
            director: "Todd Phillips",
            genre: "Crime / Drama",
            description:
                "A struggling comedian descends into madness and becomes Gotham’s symbol of chaos.",
            cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
            rating: 8.4,
            year: 2019,
            duration: "2h 2m",
        },
        {
            id: 10,
            poster: "https://i.pinimg.com/1200x/b3/64/71/b36471519fbddde3346067c1d7ad0127.jpg",
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            genre: "Action / Superhero",
            description:
                "Spider-Man faces multiverse chaos when his identity is revealed to the world.",
            cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
            rating: 8.2,
            year: 2021,
            duration: "2h 28m",
        },
    ];


    return (
        <div>
            <div className=' min-h-screen p-6 bg-[rgba(0,0,0,0.95)] md:px-15 md:py-10'>
                <div>
                    <h1 className='text-4xl font-bold md:text-8xl'>
                        <span className='text-white'>Discover </span>
                        <span className='text-amber-300 italic'>Cinema.</span>
                    </h1>
                    <p className='text-gray-600 font-bold leading-8 italic md:text-xl md:px-5 md:leading-12'>Discover Movies. Save Favorites. Enjoy the Experience.</p>
                </div>

                <div>
                    <FilterMovie movies={movies} />
                </div>

            </div>
        </div>
    )
}

export default MoviePage;
