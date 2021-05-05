import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledNav>
            <StyledLogo>
                <img src="/images/logo.svg" alt="logo"/>
            </StyledLogo>
            <StyledNavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="home-icon"/>
                    <span>Home</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="search-icon"/>
                    <span>Search</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="watchlist-icon"/>
                    <span>Watchlist</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="original-icon"/>
                    <span>Originals</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="movie-icon"/>
                    <span>Movies</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="series-icon"/>
                    <span>Series</span>
                </a>
            </StyledNavMenu>
            <StyledLogin >
                Login
            </StyledLogin>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const StyledLogo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

const StyledNavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background-color: rgb(249, 249, 249);
                position: absolute;
                bottom: -6px;
                right: 0;
                left: 0;
                transform: scaleX(0);
                opacity: 0;
                transform-origin: right center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
                visibility: visible;
            }
        }
    }
`

const StyledLogin = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    outline: none;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`
export default Header
