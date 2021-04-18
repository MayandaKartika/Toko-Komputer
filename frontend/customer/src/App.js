import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Product from "./Pages/Product"
import Transaction from "./Pages/Transaction"
import Cart from "./Pages/Cart"

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/cart" component={Cart} />
      </Switch>
    )
  }
}
