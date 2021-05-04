import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
    return (
        <StyledContainer>
            <StyledWrap>
                <img src="/images/viewers-disney.png" alt="disney"/>
            </StyledWrap>
            <StyledWrap>
                <img src="/images/viewers-pixar.png" alt="pixar"/>
            </StyledWrap>
            <StyledWrap>
                <img src="/images/viewers-marvel.png" alt="marvel"/>
            </StyledWrap>
            <StyledWrap>
                <img src="/images/viewers-starwars.png" alt="starwars"/>
            </StyledWrap>
            <StyledWrap>
                <img src="/images/viewers-national.png" alt="national"/>
            </StyledWrap>
        </StyledContainer>
    )
}

const StyledContainer = styled.main`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 25px;
`

const StyledWrap = styled.div`
    border: 3px solid rgba(249, 249, 249, .1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`

export default Viewers
