import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "swagger-ui-react/swagger-ui.css";
import About from "./components/About";
import Home from "./components/Home";
import ShopApi from "./components/ShopApi";
import ShopApiBooks from "./components/ShopApiBooks";
import ShopApiElectronics from "./components/ShopApiElectronics";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const routes = ["/", "/shopapi", "shopapi-books", "shopapi-electronics"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
 

    <AppBar>
      <Tabs
        // indicatorColor="primary"
        // textColor="primary"
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Home" component={Link} to={routes[0]} />
        <Tab label="ShopApi" component={Link} to={routes[1]} />
        <Tab label="ShopApi-books" component={Link} to={routes[2]} />
        <Tab label="ShopApi-electronics" component={Link} to={routes[3]} />
      </Tabs>
    </AppBar>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shopapi" component={ShopApi} />
          <Route exact path="/shopapi-books" component={ShopApiBooks} />
          <Route exact path="/shopapi-electronics" component={ShopApiElectronics} />
          <Route exact path="/about" component={About} />
        </Switch>

    </Router>
  );
}

export default App;
