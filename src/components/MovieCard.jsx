import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const MovieCard = ({moviesData,showFavourite}) => {

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    const handleOnClick = (favMovie) => {
        setFavouriteMovies([...favouriteMovies,favMovie]);
    }

    const showMoviesCard = showFavourite?favouriteMovies:moviesData;


    if(moviesData.length===0){
        return <div className='h-50 text-md text-gray-400 font-bold grid place-content-center md:text-2xl'>Movie Not Found !!</div>
    }

    if(showFavourite===true && favouriteMovies.length===0){
         return <div className='h-50 text-md text-gray-400 font-bold grid place-content-center md:text-2xl'>Your list is empty !!</div>
    }
   
    return (
        <>
            {
                showMoviesCard.map(movie => {
                    return <div key={movie.id} className=' w-80 my-8 mx-auto border-2 hover:border-amber-300 bg-[rgba(255,255,255,0.02)] rounded-sm hover:shadow-[1px_1px_20px_20px_rgba(255,210,48,0.1)] transition-all duration-600 hover:-translate-y-2'>
                        <div className='relative'>
                            <figure>
                                <img src={movie.poster} alt="movie-poster" className='h-95 w-full rounded-md' />
                            </figure>

                            <div className='w-fit p-2  border border-amber-200 bg-gray-800 text-xs text-amber-300 rounded-lg absolute top-2 left-5'>{movie.genre}</div>
                        </div>

                        <div className='px-4 py-3'>
                            <h2 className='text-white text-xl font-bold'>{movie.title}</h2>
                            <p className='text-xs my-2 font-semibold text-gray-500 '>{movie.year} - {movie.director}</p>
                            <p className='text-gray-300 leading-5'>{movie.description}</p>

                            <div className='mt-4 flex justify-between items-center'>
                                <div className=' text-amber-300 flex items-center gap-2'>
                                    <span> <FaStar /> </span>
                                    <span>{movie.rating}</span>
                                </div>

                                <div className={`h-5 px-2 py-4 border flex items-center gap-2 rounded-lg ${favouriteMovies.find((mov)=>mov.id === movie.id)?'text-red-600 border-red-600 bg-red-500/10':'text-gray-400 border-gray-500 bg-[rgba(255,255,255,0.1)]'} cursor-pointer`} onClick={()=>handleOnClick(movie)}>
                                    <span className='  text-xl'><FaHeart /></span>
                                    <span className=' font-semibold'>Save</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default MovieCard;
