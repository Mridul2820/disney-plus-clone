import React from 'react'
import GlobalStyle from './components/GlobalStyle'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from './pages/Detail'

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
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
