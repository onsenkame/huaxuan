import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import { me } from "./store";
import { fetchProducts } from "./store/allProducts";
import { fetchCart } from "./store/order";
import Conventions from "./components/Conventions";
import Portfolio from "./components/Portfolio";
import ProcessZL from "./components/DrawProcessZL";
import ProcessDH from "./components/DrawProcessDH";
import ProcessKH from "./components/DrawProcessKH";
import ProcessHL from "./components/DrawProcessHL";
import Process from "./components/Process";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.fetchCart();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/conventions" component={Conventions} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/conventions" component={Conventions} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/process" component={Process} />
            <Route exact path="/process-zl" component={ProcessZL} />
            <Route exact path="/process-dh" component={ProcessDH} />
            <Route exact path="/process-kh" component={ProcessKH} />
            <Route exact path="/process-hl" component={ProcessHL} />
            {/* <Route path="/products/:productId" component={SingleProduct} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} /> */}
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    fetchCart: () => dispatch(fetchCart()),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
