import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledNav>
            <StyledLogo src="" alt="" />
            <StyledNavMenu />
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    height: 70px;
    background-color: #090b13;
`

const StyledLogo = styled.img`
    width: 80px;
`

const StyledNavMenu = styled.div`
    
`
export default Header
