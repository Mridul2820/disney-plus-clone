import React from 'react'
import styled from 'styled-components'
import ImageSlide from '../components/ImageSlide'
import Recommends from '../components/Recommends'
import Viewers from '../components/Viewers'

const Home = () => {
    return (
        <StyledContainer>
            <ImageSlide />
            <Viewers />
            <Recommends />
        </StyledContainer>
    )
}

const StyledContainer = styled.main`
    min-height: 100vh;
    /* height: calc(100vh - 70px); */
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &::before {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

export default Home
