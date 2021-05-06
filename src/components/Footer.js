import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <StyledFooter>
            <p>
                Copyright &copy; {year} by 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/Mridul2820">
                    Mridul
                </a> 
                . This is a Clone Version. 
            </p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    padding: 15px 0;
    text-align: center;
    font-size: 12px;
    color: #aaa;
    border-top: 1px solid #ccc;

    a {
        margin-left: 5px;
        color: #ccc;
        font-weight: 600;
    }
`

export default Footer
