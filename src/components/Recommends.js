import React from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import MovieCard from './MovieCard';

const Recommends = () => {
    const movies = useSelector(selectRecommend);

    return (
        <StyledContainer>
            <h4>Recommended for You</h4>
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

    @media (max-width: 480px) {
        gap: 15px;
    }

    @media (max-width: 375px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export default Recommends
