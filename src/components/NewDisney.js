import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import { selectNewDisney } from "../features/movie/movieSlice";

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);

    return (
        <StyledContainer>
            <h4>New to Disney+</h4>
            <StyledContent>
            {movies && 
                movies.map((movie, key) => (
                    <MovieCard
                        key={key} 
                        movieID={movie.id}
                        movieImg={movie.cardImg}
                        movieTitle={movie.title}
                    />
                ))
            }
            </StyledContent>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    padding: 0 0 26px;
`

const StyledContent = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

export default NewDisney
