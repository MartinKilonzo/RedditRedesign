import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {deepOrange500, amber900} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './assets/Nav/Nav';
import ControlBar from './assets/ControlBar';
import FrontPage from './views/FrontPageView/FrontPageView';
import RedditData from '../actions/RedditData';

const theme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: amber900
  }
});

injectTapEventPlugin();
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewNav: false,
      posts: [],
      view: 0
    };
  }
  componentWillMount = () => {
      this.setState({posts: new RedditData().getData()});
  }
  toggleNav = () => {
    this.setState({
      viewNav: !this.state.viewNav
    });
  }
  render() {
    console.log(this.state.posts)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <ControlBar toggleNav={this.toggleNav}></ControlBar>
          <Nav open={this.state.viewNav} toggleNav={this.toggleNav} subreddits={this.props.subreddits}></Nav>
          <FrontPage posts={this.state.posts}></FrontPage>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
  subreddits: [
    {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }, {
      title: 'TIFU',
      link: 'testLink'
    }
  ]
};

export default AppComponent;
