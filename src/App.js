import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './componets/homes/Home';
import Login from './componets/logins/Login';
import Register from './componets/registers/Register';
import Profile from './componets/profiles/Profile';
import NotFoundPage from './componets/notfoundpages/NotFoundPage';
import Users from './componets/users/Users';
import Languages from './componets/languages/Languages';
import RoomTypes from './componets/roomtypes/RoomTypes';
import Citys from './componets/citys/Citys';
import Categories from './componets/categories/Categories';
import Bookings from './componets/bookings/Bookings';
import Revenues from './componets/revenues/Revenues';
import Hosts from './componets/hosts/Hosts';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-body"> 
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/users" component={Users} />
            <Route path="/languages" component={Languages} />
            <Route path="/roomtypes" component={RoomTypes} />
            <Route path="/citys" component={Citys} />
            <Route path="/categories" component={Categories} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/revenues" component={Revenues} />
            <Route path="/hosts" component={Hosts} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> 
            <Route path="/profile" component={Profile} /> 
            <Route component={NotFoundPage} /> 
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
