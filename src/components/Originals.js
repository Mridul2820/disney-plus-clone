import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard';
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = () => {
    const movies = useSelector(selectOriginal);

    return (
        <StyledContainer>
            <h4>Originals</h4>
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

export default Originals
