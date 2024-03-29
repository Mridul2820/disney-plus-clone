import { useEffect } from 'react'
import styled from 'styled-components'

import ImageSlide from '../components/ImageSlide'
import NewDisney from '../components/NewDisney'
import Originals from '../components/Originals'
import Recommends from '../components/Recommends'
import Trending from '../components/Trending'
import Viewers from '../components/Viewers'

import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase/firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import Footer from '../components/Footer'

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        // console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                
                switch (doc.data().type) {
                case "recommend":
                    // eslint-disable-next-line
                    recommends = [...recommends, { id: doc.id, ...doc.data() }];
                    break;
        
                case "new":
                    // eslint-disable-next-line
                    newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                    break;
        
                case "original":
                    // eslint-disable-next-line
                    originals = [...originals, { id: doc.id, ...doc.data() }];
                    break;
        
                case "trending":
                    // eslint-disable-next-line
                    trending = [...trending, { id: doc.id, ...doc.data() }];
                    break;
                    
                default : 
                }                
            });
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [userName]);

    return (
        <StyledContainer>
            <ImageSlide />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
            <Footer />
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
