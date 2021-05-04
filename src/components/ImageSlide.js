import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <img src="/images/slider-scale.jpg" alt="slider"/>
            </StyledWrap>

            <StyledWrap>
                <img src="/images/slider-scales.jpg" alt="slider"/>
            </StyledWrap>

            <StyledWrap>
                <img src="/images/slider-badging.jpg" alt="slider"/>
            </StyledWrap>

            <StyledWrap>
                <img src="/images/slider-badag.jpg" alt="slider"/>
            </StyledWrap>
        </StyledCarousel>
    )
}

const StyledCarousel = styled(Slider)`
    margin-top: 20px;

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

export default ImageSlide
