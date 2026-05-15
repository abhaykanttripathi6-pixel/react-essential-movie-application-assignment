import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import MovieCard from './MovieCard';

const FilterMovie = ({ movies }) => {

    const [searchMovie, setSearchMovie] = useState('');

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    const [showFavourite, setShowFavourite] = useState(false);

    const moviesList = showFavourite ? favouriteMovies : movies

    const filteredMovies = moviesList.filter((movie) => {
        return movie.director.toLowerCase()?.includes(searchMovie?.toLowerCase()) || movie.title.toLowerCase()?.includes(searchMovie?.toLowerCase());
    });


    const handleShowFav = (val) => {
        if (val === showFavourite) return;
        setShowFavourite(val);
        setSearchMovie('');
    };

    const handleResetInput = () => {
        if (searchMovie !== '') {
            setSearchMovie('');
        }
    };

    const handleReset = () => {
        if(!showFavourite) return alert('This feature can only be used inside favourites.');
        if(favouriteMovies.length === 0) return alert('Your list is already empty.')
        const verify = confirm('are your sure do you want to reset your list ?');
        if (verify) {
            setFavouriteMovies([]);
        }
    };

    return (
        <>
            <div className='relative md:w-1/2'>
                <div>
                    <input type="text" placeholder='Search by Title/Director' value={searchMovie !== ' ' ? searchMovie : ''} onChange={(e) => setSearchMovie(e.target.value)} className='h-10 py-5 px-10 my-4 w-full border-2 border-gray-800 bg-gray-800 rounded-3xl outline-none focus:border-amber-300 transition-all duration-700 text-gray-400 ' />
                </div>

                <div className='size-fit p-2 my-1 bg-gray-800 text-sm text-gray-300 flex items-center gap-1 rounded-lg cursor-pointer active:scale-95 transition-transform  duration-800' onClick={handleReset}>
                    <span>Reset</span>
                    <GrPowerCycle className='pt-0.5' />
                </div>


                <div>
                    <span className={`inline-block w-1/2 p-3 mt-5 border-b-2 bg-gray-900/20 font-bold text-center ${showFavourite ? 'border-b-gray-400 text-gray-500' : 'border-b-2 border-b-amber-300 text-amber-300'} transition-all duration-500 cursor-default`} onClick={() => handleShowFav(false)}>All</span>

                    <span className={`inline-block w-1/2 p-3 border-b-2 bg-gray-900/20 font-bold text-center ${showFavourite ? 'border-b-2 border-b-amber-300 text-amber-300' : 'text-gray-500'} transition-all duration-500 cursor-default`} onClick={() => handleShowFav(true)}>Favourites</span>
                </div>

                <div className={`text-gray-400 text-xl absolute top-7 right-3 ${!searchMovie ? 'hidden' : ''}`} onClick={handleResetInput}>
                    <RxCross2 />
                </div>

                <div className='text-gray-400 text-xl  absolute top-7 left-3'>
                    <IoIosSearch />
                </div>
            </div>


            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-1'>
                <MovieCard
                    moviesData={searchMovie ? filteredMovies : moviesList}
                    showFavourite={showFavourite}
                    favouriteMovies={favouriteMovies}
                    setFavouriteMovies={setFavouriteMovies} />
            </div>
        </>
    )
}

export default FilterMovie;
