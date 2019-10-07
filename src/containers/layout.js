import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "uuid/v1";
import MenuSider from "./menu-sider";
import Post from "./../components/post";
import ListPost from "./../components/list-post";
import TestComponent from "./../components/test-component";
import Widget from "../components/widget";


class Layout extends React.Component {
  
  componentDidUpdate() {
    window.scrollTo(0, 0);
    console.log("layout scroll to top");
  }

  render() {
    return (
      <Router>
        <MenuSider/>
        <div className="content">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-9">
              <Switch>
                <Route path="/post/:slug" component={Post} />
                <Route path="/test" component={TestComponent} />
                <Route path="/:type?/:slug?" render={props => <ListPost key={uuid()} {...props}/>} />
              </Switch>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <Widget />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
