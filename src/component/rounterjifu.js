import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbarjifu from './title/navbarjifu'
import Home from './home/home'
import About from './about/about'
import Example from './example/example'
import Footer from './footer/footer'
import './rounterjifu.css'

class Routerjifu extends React.Component {
  render() {
    return (
      <div className="rounterjifu">
        <Router>
          <Navbarjifu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/example" component={Example} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
export default Routerjifu
