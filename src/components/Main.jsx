import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {deepOrange500, amber900} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AddPost from './assets/AddPost';
import ControlBar from './assets/ControlBar';
import FrontPage from './views/FrontPageView/FrontPageView';
import Nav from './assets/Nav/Nav';
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
    const data = new RedditData().getData();
      this.setState({posts: data.posts, subreddits: data.subreddits});
  }
  toggleNav = () => {
    this.setState({
      viewNav: !this.state.viewNav
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <ControlBar toggleNav={this.toggleNav}></ControlBar>
          <Nav open={this.state.viewNav} toggleNav={this.toggleNav} subreddits={this.state.subreddits}></Nav>
          <AddPost></AddPost>
          <FrontPage posts={this.state.posts}></FrontPage>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
