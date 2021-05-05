import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <GlobalStyle />
            <Router>
            <Header />
                <Switch>
                    <Route exact path="/" >
                        <Login />
                    </Route>
                </Switch>
            </Router>

            {/* 
            
            <Home /> */}
        </div>
    )
}

export default App
