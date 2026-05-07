import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import MovieCard from './MovieCard';

const FilterMovie = ({ movies }) => {

    const [searchMovie, setSearchMovie] = useState('');

    const [showFavourite, setShowFavourite] = useState(false);

    const filteredMovies = movies.filter((movie) => {
        return movie.director.toLowerCase()?.includes(searchMovie?.toLowerCase()) || movie.title.toLowerCase()?.includes(searchMovie?.toLowerCase());
    });

    const handleResetInput = ()=>{
        if(searchMovie !== ''){
            setSearchMovie('');
        } 
    }


    return (
        <>
            <div className='relative md:w-1/2'>
                <div>
                    <input type="text" placeholder='Search by Title/Director' value={searchMovie.trim()} onChange={(e) => setSearchMovie(e.target.value)} className='h-10 py-5 px-10 my-4 w-full border-2 border-gray-800 bg-gray-800 rounded-3xl outline-none focus:border-amber-300 transition-all duration-700 text-gray-400 ' />
                </div>

                <div>
                    <span className={`inline-block w-1/2 p-3 mt-5 border-b-2 bg-gray-900/20 font-bold text-center ${showFavourite?'border-b-gray-400 text-gray-500':'border-b-2 border-b-amber-300 text-amber-300'} transition-all duration-500 cursor-default`} onClick={()=>setShowFavourite(false)}>All</span>
                    
                    <span className={`inline-block w-1/2 p-3 border-b-2 bg-gray-900/20 font-bold text-center ${showFavourite?'border-b-2 border-b-amber-300 text-amber-300':'text-gray-500'} transition-all duration-500 cursor-default`} onClick={()=>setShowFavourite(true)}>Favourites</span>
                </div>

                <div className={`text-gray-400 text-xl absolute top-7 right-3 ${!searchMovie?'hidden':''}`} onClick={handleResetInput}>
                    <RxCross2 />
                </div>

                <div className='text-gray-400 text-xl  absolute top-7 left-3'>
                    <IoIosSearch />
                </div>
            </div>

            <div className=' grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
                <MovieCard moviesData={searchMovie ? filteredMovies : movies} showFavourite={showFavourite}/>
            </div>
        </>
    )
}

export default FilterMovie;
