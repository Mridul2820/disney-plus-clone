import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="logo top" ></CTALogoOne>
                </CTA>
                <StyledBgImage />
            </StyledContent>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const StyledContent = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const StyledBgImage = styled.div`
    height: 100%;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

export default Login
