import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './Nav.jsx';
import RedditData from '../../actions/RedditData';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    let viewNav = false;

    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {userData: this.props.userData}));
    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {viewNav && <Nav {...this.props}></Nav>}
          {childrenWithProps}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
