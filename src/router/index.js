import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../pages/Main/Home"
import Life from "../pages/Main/Life"
import Shop from "../pages/Main/Shop"
import User from "../pages/Main/User"
import City from "../pages/City"
import Layout from '../pages/Main/Layout';
import BottomNav from '../components/BottomNav';
import Search from '../pages/Search';
import Details from '../pages/Detail'
import Login from '../pages/Login'
import Order from '../pages/Order'
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path='/login' component={Login} />
        <Route path='/details/:id' component={Details}></Route>
        <Route path="/order" component={Order}></Route>
        {/* 路由传参 */}
        <Route path="/search/:keywords" component={Search}></Route>
        <Layout path='/'>
          <BottomNav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/life" component={Life}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  )
}

export default AppRouter