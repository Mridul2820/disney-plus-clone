import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase/firebase';
import { selectUserName, setLoginCredentials, selectUserPhoto, setSignOutState } from "../features/user/userSlice";

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                setUser(user);
                history.push("/home");
            }
        })
        // eslint-disable-next-line
    }, [userName])

    const handleAuth = () => {
        if (!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } 
        else if (userName) {
            auth
                .signOut()
                .then(() => {
                dispatch(setSignOutState());
                    history.push("/");
                })
                .catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(setLoginCredentials({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <StyledNav>
            <StyledLogo href="/">
                <img src="/images/logo.svg" alt="logo"/>
            </StyledLogo>
            {!userName ? 
                <StyledLogin onClick={handleAuth}>Login</StyledLogin>
                :
                <>
                <StyledNavMenu>
                    <a href="/home" className="mid-small">
                        <img src="/images/home-icon.svg" alt="home-icon"/>
                        <span>Home</span>
                    </a>
                    <a href="/" className="mid-small">
                        <img src="/images/search-icon.svg" alt="search-icon"/>
                        <span>Search</span>
                    </a>
                    <a href="/" className="mid-small">
                        <img src="/images/watchlist-icon.svg" alt="watchlist-icon"/>
                        <span>Watchlist</span>
                    </a>
                    <a href="/" className="mid-hide">
                        <img src="/images/original-icon.svg" alt="original-icon"/>
                        <span>Originals</span>
                    </a>
                    <a href="/" className="mid-hide">
                        <img src="/images/movie-icon.svg" alt="movie-icon"/>
                        <span>Movies</span>
                    </a>
                    <a href="/" className="mid-hide">
                        <img src="/images/series-icon.svg" alt="series-icon"/>
                        <span>Series</span>
                    </a>
                </StyledNavMenu>
                <StyledSignOut>
                    <StyledUserImage src={userPhoto} alt={userName} />
                    <StyledDropDown>
                        <span onClick={handleAuth}>Sign out</span>
                    </StyledDropDown>
                </StyledSignOut>
                </>
            }
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
    padding: 0 30px;
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
    margin-left: 10px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;

        @media (max-width: 640px) {
            padding: 0 6px;
        }

        &.mid-hide {
            @media (max-width: 768px) {
                display: none;
            }
        }

        &.mid-small {
            @media (max-width: 480px) {
                display: none;
            }
        }

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

const StyledDropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
    visibility: hidden;
`

const StyledSignOut = styled.div`
    margin-left: auto;
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${StyledDropDown} {
            opacity: 1;
            visibility: visible;
            transition-duration: 1s;
        }
    }
`

const StyledUserImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

export default Header
