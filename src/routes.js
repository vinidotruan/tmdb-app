import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Listagem from './pages/listagem';
import Film from './pages/film';
import FooterBar from './components/Footer-Bar';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Listagem }/>
            <Route exact path="/movies/:id" component={ Film }/>
        </Switch>
        <FooterBar />
    </BrowserRouter>

)

export default Routes;