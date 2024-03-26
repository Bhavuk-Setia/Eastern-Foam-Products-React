import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HorizontalFoamCutting from './views/horizontal-foam-cutting'
import Binder from './views/binder'
import BatchFoaming from './views/batch-foaming'
import PUScrap from './views/pu-scrap'
import MachineListing from './views/machine-listing'
import ScrapListing from './views/scrap-listing'
import MemoryScrap from './views/memory-scrap'
import VerticalCuttingMachine from './views/vertical-cutting-machine'
import HomePage from './views/home-page'
import RebondedMachine from './views/rebonded-machine'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={HorizontalFoamCutting}
          exact
          path="/horizontal-foam-cutting"
        />
        <Route component={Binder} exact path="/binder" />
        <Route component={BatchFoaming} exact path="/batch-foaming" />
        <Route component={PUScrap} exact path="/pu-scrap" />
        <Route component={MachineListing} exact path="/machine-listing" />
        <Route component={ScrapListing} exact path="/scrap-listing" />
        <Route component={MemoryScrap} exact path="/memory-scrap" />
        <Route
          component={VerticalCuttingMachine}
          exact
          path="/vertical-cutting-machine"
        />
        <Route component={HomePage} exact path="/" />
        <Route component={RebondedMachine} exact path="/rebonded-machine" />
        <Route component={Home} exact path="/home" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
