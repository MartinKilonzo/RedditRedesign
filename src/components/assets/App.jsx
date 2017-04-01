import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './Nav.jsx';
import ControlBar from './ControlBar';
import RedditData from '../../actions/RedditData';

injectTapEventPlugin();
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewNav: false
    };
  }
  toggleNav = () => {
    this.setState({viewNav: !this.state.viewNav});
  }
  render() {
    // const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {userData: this.props.userData}));

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <ControlBar toggleNav={this.toggleNav}></ControlBar>
          <Nav open={this.state.viewNav} toggleNav={this.toggleNav} subredditList={this.props.subredditList}></Nav>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
