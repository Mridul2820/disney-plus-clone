import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import db from "../firebase/firebase";
import TrailerPopup from "../components/TrailerPopup";

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    const [showTrailer, setShowTrailer] = useState(false)

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such document in firebase");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);
    
    return (
        <>
        {showTrailer && 
            <TrailerPopup 
                url={detailData.trailer}
                setShowTrailer={setShowTrailer}
            />
        }
        <StyledContainer>
            <StyledBackground
                style={{backgroundImage: `url(${detailData.backgroundImg})`}}
            />
            <StyledImageTitle>
                <img
                    src={detailData.titleImg}
                    alt={detailData.title}
                />
            </StyledImageTitle>
            <StyledMeta>
                <StyledControls>
                    <StyledPlayer>
                        <img 
                            src="/images/play-icon-black.png" 
                            alt="play-icon-black" 
                        />
                        <span>Play</span>
                    </StyledPlayer>
                    <StyledTrailer onClick={() => setShowTrailer(true)}>
                        <img 
                            src="/images/play-icon-white.png" 
                            alt="play-icon-white" 
                        />
                        <span>Trailer</span>
                    </StyledTrailer>
                    <StyledAddList>
                        <span />
                        <span />
                    </StyledAddList>
                    <StyledGroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="group-icon" />
                        </div>
                    </StyledGroupWatch>
                </StyledControls>
                <StyledSubTitle>{detailData.subTitle}</StyledSubTitle>
                <StyledDescription>{detailData.description}</StyledDescription>
            </StyledMeta>
        </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    height: 100%;
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
`

const StyledBackground = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    opacity: 0.8;
    z-index: -4;
    background-position: top right;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    height: 100%;
    width: 100vw;
`;

const StyledImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 25vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    
    img {
        max-width: 500px;
        min-width: 200px;
        width: 35vw;
    }
`;

const StyledMeta = styled.div`
    max-width: 874px;
`

const StyledControls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`

const StyledPlayer = styled.button`
    margin: 0px 22px 0px 0px;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;

    span {
        font-size: 15px;
        letter-spacing: 1.8px;
        color: #000;
    }

    img {
        width: 32px;
    }
    
    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 12px;
        margin: 0px 0px 0px 10px;

        img {
            width: 25px;
        }
    }
`;

const StyledTrailer = styled(StyledPlayer)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);

    span {
        color: rgb(249, 249, 249);
    }

    &:hover {
        background: #111;
    }
`;

const StyledAddList = styled.div`
    margin: 0 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
        }

        &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
        }
    }
`;

const StyledGroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;

        img {
            width: 100%;
        }
    }
`;

const StyledSubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const StyledDescription = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default Detail
