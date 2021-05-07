import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const ImageSlide = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <StyledCarousel {...settings}>
            <StyledWrap>
                <Link to="/detail/fAjFe4kaaqNqOwEk02jU">
                    <img src="/images/slider-faws.jpg" alt="slider"/>
                    <StyledContent to="/detail/fAjFe4kaaqNqOwEk02jU">
                        <h1>The falcon and the winter soldier</h1>
                        <h3>2021 • 1 Season</h3>
                        <h3>Science Fiction, Action-Adventure</h3>
                    </StyledContent>
                </Link>
            </StyledWrap>

            <StyledWrap>
                <Link to="/detail/tDXyqYnHoruJmCIUMLaI">
                    <img src="/images/slider-scales.jpg" alt="slider"/>
                    <StyledContent>
                        <h1>Assembled</h1>
                        <h3>2021 • 1 Season</h3>
                        <h3>Docuseries, Anthology</h3>
                    </StyledContent>
                </Link>
            </StyledWrap>

            <StyledWrap>
                <Link to="/detail/BdmsWn0O9tYXtN3PeQ3V">
                    <img src="/images/slider-badging.jpg" alt="slider"/>
                    <StyledContent>
                        <h1>Burrow</h1>
                        <h3>2020 • 6m</h3>
                        <h3>Family, Animation</h3>
                    </StyledContent>
                </Link>
            </StyledWrap>

            <StyledWrap>
                <Link to="/detail/8Smuw7yWyGxmZalrHKSk">
                    <img src="/images/slider-raya.jpg" alt="slider"/>
                    <StyledContent>
                        <h1>Raya</h1>
                        <h3>2021 • 1h 52m</h3>
                        <h3>Family, Fantasy, Animation</h3>
                    </StyledContent>
                </Link>
            </StyledWrap>
        </StyledCarousel>
    )
}

const StyledCarousel = styled(Slider)`
    margin-top: 90px;

    ul li button {
        &::before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button::before {
        color: #fff;
    }

    .slick-list {
        overflow: initial;
    }

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`

const StyledWrap = styled.div`
    cursor: pointer;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: .5s;

        &:hover {
            border-color: rgba(249, 249, 249, .8);
        }
    }
`

const StyledContent = styled.div`
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);

    h3 {
        margin-top: 10px;
    }
`

export default ImageSlide
