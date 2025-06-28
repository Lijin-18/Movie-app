import React, { Children } from 'react'
import { createContext , useState } from 'react'

const MovieContext = createContext();

export const MyMovieContext = ({children})=> {

    const [pageCount , setPageCount] = useState (1);

    const incPage = () => {
        setPageCount((prev)=>prev+1)
        console.log("clicked");
        
    }
    const decPage = () => {
        setPageCount((prev)=>prev-1)
    }

    return (
        <MovieContext.Provider value={{setPageCount , pageCount , incPage , decPage}}>
            {children}
        </MovieContext.Provider>
    )

}

export default MovieContext;