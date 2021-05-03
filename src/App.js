import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
    return (
        <div className="app">
            <GlobalStyle />
            <Header />
            <Home />
        </div>
    )
}

export default App
