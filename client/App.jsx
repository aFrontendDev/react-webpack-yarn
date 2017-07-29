import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

// menu, header and footer to be included on every page
import Header from './components/_header/header.jsx';
import Footer from './components/_footer/footer.jsx';
import Menu from './components/menu.jsx';

// Pages
import Home from './pages/home';
import TestPage from './pages/testpage';
import DynamicPage from './pages/dynamicpage';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(v) {
    // switch menu-in state from true to false
    this.props.onMenuAction(v);
  }

  render() {

    return (
      <div className="wrapper">

        <Menu menuIsIn={this.props.menuIsIn} onMenuAction={this.props.onMenuAction} />

        <Header menuAction={this.menuClick} />

        <main className="main" id="main">
          <div className="layout layout--a">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={TestPage} />
              <Route path="/dynamic/:anId" component={DynamicPage} />
              <Route component={Home} />
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  menuIsIn: React.PropTypes.bool,
  onMenuAction: React.PropTypes.func
};
