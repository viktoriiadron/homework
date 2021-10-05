import React, { Component } from 'react';
import '../App.css';
import SearchVideo from '../pages/SearchVideo';
import WatchVideo from '../pages/WatchVideo';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
 
  render() {
    return(
      <>
        <BrowserRouter >
          <Switch> 
            <Route path='/search'>
              <SearchVideo/>
            </Route>
            <Route path='/watch:id'>
              <WatchVideo/>
            </Route>
            <Redirect to='/search' />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
